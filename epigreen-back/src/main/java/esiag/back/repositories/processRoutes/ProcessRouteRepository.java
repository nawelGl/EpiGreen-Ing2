package esiag.back.repositories.processRoutes;

import esiag.back.models.processRoute.ProcessRoute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProcessRouteRepository extends JpaRepository<ProcessRoute, Long> {
    @Query("SELECT p FROM ProcessRoute p WHERE p.idProduct = :idProduct")
    List<ProcessRoute> findByIdProduct(Long idProduct);
}