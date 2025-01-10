package esiag.back.repositories.product;

import esiag.back.models.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // méthode particulier
    //@Query("SELECT Section, Size, Color, Material FROM Product")
    //List<Product> findAllProduct();
}
