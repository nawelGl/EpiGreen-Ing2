package esiag.back.repositories.transportation;

import esiag.back.models.transportation.Transportation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransportationRepository extends JpaRepository<Transportation, Long> {
    @Query(value = "SELECT * FROM transportation ORDER BY kg_co2 DESC LIMIT 1", nativeQuery = true)
    Optional<Transportation> findTransportationWithMaxCO2();
}
