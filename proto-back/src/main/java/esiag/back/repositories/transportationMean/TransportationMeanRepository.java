package esiag.back.repositories.transportationMean;

import esiag.back.models.transportationMeans.TransportationMean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransportationMeanRepository extends JpaRepository<TransportationMean, Long> {
  //  Optional<TransportationMean> findByNameAndDistanceMinLessThanEqualAndDistanceMaxGreaterThanEqual(String name, double distance, double distanceMax);
}

