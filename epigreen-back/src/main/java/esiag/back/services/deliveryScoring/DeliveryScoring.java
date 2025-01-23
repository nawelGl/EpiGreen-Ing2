package esiag.back.services.deliveryScoring;

import esiag.back.models.transportation.Transportation;
import esiag.back.services.transportation.TransportationService;
import org.apache.logging.log4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeliveryScoring {
    protected static Logger logger = LogManager.getLogger(DeliveryScoring.class);

    // Reference delivery data :
    private static final double START_LATITUDE  = 42.4794084;
    private static final double START_LONGITUDE = 3.1275893;
    private static final String START_ADDRESS = "Banyuls-sur-Mer, 66650, France";

    private static final double END_LATITUDE = 51.071002;
    private static final double END_LONGITUDE = 2.5245134;
    private static final String END_ADDRESS = "Bray-Dunes, 59123, France";

    //TODO : check si plus judicieux de faire le call API quand même
    //Addresses wont move so the distance stays the same too
    private static final Double DISTANCE = 1179.542;

    @Autowired
    private TransportationService transportationService;


    //Methods related to delivery's footprint score
    public float calculateCo2(float distance, float kgCo2PerKm) {
        System.out.println("DANS CALCULATE CO2");
        float co2 = distance * kgCo2PerKm;
        double roundedValue = Math.round(co2 * 1000.0) / 1000.0;
        return (float)roundedValue;

    }

    public Character calculateDeliverysScore(Double carbonFootprint){
        System.out.println("DANS calculateDeliverysScore");
        logger.info("Référentiel pour le score : livraison la plus polluante.");
        logger.info("On va calculer le score en fonction de celle ci.");
        logger.info("Adresses en dur car valeurs constantes :");
        logger.info("Adresse de départ : " + START_ADDRESS);
        logger.info("Adresse d'arrivée : " + END_ADDRESS);
        logger.info("On a une requête qui donne le véhicule au plus grand facteur d'émission de la BDD.");

        //Find the most polluting vehicle
        Transportation maxCo2Transportation = transportationService.findTransportationWithMaxCO2();

        logger.info("Infos du véhicule le plus polluant trouvé en base : " + maxCo2Transportation.toString());

        Double maxCo2Quantity = DISTANCE * maxCo2Transportation.getKgCo2();

        logger.info("Empreinte carbone de la livraison la plus polluante : " + maxCo2Quantity);

        //We have a score from A to E so we will divide the max quantity by 5 to have 5 groups.
        Double range = maxCo2Quantity / 5;

        logger.info("On divise cette empreinte carbone maximale par 5 : " + range);
        logger.info("On donne un score aux empreinte en focntion de cet intervalle :");

        Double range1 = range;
        Double range2 = range * 2;
        Double range3 = range * 3;
        Double range4 = range * 4;
        Double range5 = maxCo2Quantity;

        // Assign scores based on ranges
        if (carbonFootprint != null && carbonFootprint >= 0) {
            if (carbonFootprint <= range1) {
                return 'A';
            } else if (carbonFootprint <= range2) {
                return 'B';
            } else if (carbonFootprint <= range3) {
                return 'C';
            } else if (carbonFootprint <= range4) {
                return 'D';
            } else if (carbonFootprint <= range5) {
                return 'E';
            }
        }

        logger.warn("Empreinte carbone invalide ou hors des limites attendues : " + carbonFootprint);
        return '?';
    }
}
