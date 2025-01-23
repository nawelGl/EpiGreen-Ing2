package esiag.back.repositories.transportationMean;

import esiag.back.models.transportationMeans.TransportationMean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransportationMeanRepository extends JpaRepository<TransportationMean, Long> {
    @Query("SELECT t FROM TransportationMean t WHERE t.type = :type AND t.area = :area AND :distance BETWEEN t.distanceMin AND t.distanceMax")
    Optional<TransportationMean> findByAreaDistanceTransporationType(String type, double distance,String area );
}

