package esiag.back.repositories.product;

import esiag.back.models.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.id = :id")
    Product findProductById(@Param("id") Long id);

    @Query("SELECT p FROM Product p " +
            "WHERE (:section IS NULL OR p.section = :section) " +
            "AND (:category IS NULL OR  p.category = :category) " +
            "AND (:color IS NULL OR  p.color = :color) " +
            "AND (:size IS NULL OR p.size = :size) " +
            "AND (:price IS NULL OR p.price = :price)")
    List<Product> findProductsByFilters(
            @Param("section") String section,
            @Param("category") String category,
            @Param("color") String color,
            @Param("size") String size,
            @Param("price") Integer price
    );
}
