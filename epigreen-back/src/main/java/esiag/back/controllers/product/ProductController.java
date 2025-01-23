package esiag.back.controllers.product;

import esiag.back.models.product.Product;
import esiag.back.services.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;




@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable int id) {

        return new ResponseEntity<>(productService.findByIdProduct(id), HttpStatus.OK);
    }
}