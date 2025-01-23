package esiag.back.services.product;

import esiag.back.models.product.Product;
import esiag.back.services.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import esiag.back.repositories.product.ProductRepository;
import java.util.Optional;


@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product findByIdProduct(long idProduct){
        Optional<Product> product= productRepository.findById(idProduct);
        return product.orElse(null);
    }

}