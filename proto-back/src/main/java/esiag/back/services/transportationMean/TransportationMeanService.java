package esiag.back.services.transportationMean;

import esiag.back.models.transportationMeans.TransportationMean;
import esiag.back.repositories.transportationMean.TransportationMeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TransportationMeanService {
  /**  @Autowired
    private TransportationMeanRepository transportationMeanRepository;

    public double calculateCarbonFootprint(String transportationType, double distance) {

        Optional<TransportationMean> transportationMean = transportationMeanRepository
                .findByNameAndDistanceMinLessThanEqualAndDistanceMaxGreaterThanEqual(transportationType, distance, distance);

        if (transportationMean.isPresent()) {
            // Récupérer le coefficient de CO2 et calculer l'empreinte carbone
            double coefficient = transportationMean.get().getConsumption();
            return coefficient * distance; // Empreinte carbone en fonction de la distance
        } else {
            throw new IllegalArgumentException("Aucun moyen de transport trouvé pour les critères donnés.");
        }
    }
  */
}

