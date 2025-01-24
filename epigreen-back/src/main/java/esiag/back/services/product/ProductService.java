package esiag.back.services.product;

import esiag.back.models.product.Product;
import esiag.back.services.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import esiag.back.repositories.product.ProductRepository;
import java.util.Optional;
import java.util.List;


@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product findByIdProduct(long idProduct){
        Optional<Product> product= productRepository.findById(idProduct);
        return product.orElse(null);
    }
    public List<Product> filterProducts(String section, String category, String color, String size, Integer price){
        return productRepository.findProductsByFilters(section,category,color,size,price);
    }
}