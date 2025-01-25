package esiag.back.services.transportationMean;

import esiag.back.models.transportationMeans.TransportationMean;
import esiag.back.repositories.transportationMean.TransportationMeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class TransportationMeanService {

    private static final Logger logger = Logger.getLogger( TransportationMeanService.class.getName() );

    @Autowired
    private TransportationMeanRepository transportationMeanRepository;

    public double calculateCarbonFootprint(String transportationType, double distance, String area) {
        logger.info("Distance: " + distance);
        logger.info("Area: " + area);
        logger.info("Transport Type: " + transportationType);

        Optional<TransportationMean> transportationMean = transportationMeanRepository
                .findByAreaDistanceTransporationType(transportationType, distance, area);
        logger.info("avant le calcul");
        if (transportationMean.isPresent()) {
            double coefficient = transportationMean.get().getConsumption();

            logger.info(String.valueOf(coefficient));
            double carbonfootprint= coefficient * distance;
            logger.info(String.valueOf(carbonfootprint));
            return carbonfootprint;
        } else {
            logger.info("erreur else ");
            throw new IllegalArgumentException("Aucun moyen de transport trouvé pour les critères donnés.");
        }


    }

}

