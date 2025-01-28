package esiag.back.controllers.product;

import esiag.back.models.product.Product;
import esiag.back.services.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable int id) {

        return new ResponseEntity<>(productService.findByIdProduct(id), HttpStatus.OK);
    }

    @PostMapping("/filter")
    public ResponseEntity<List<Product>> filterProducts(
            @RequestParam(required = false) String section,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) Integer price) {


        System.out.println("ProducController: Filters Received: section=" + section + ", category=" + category +
                ", color=" + color + ", size=" + size + ", price=" + price);

        try {
            List<Product> filteredProducts = productService.filterProducts(section, category, color, size, price);
            System.out.println("ProductController: Filtered Products: " + filteredProducts);
            return ResponseEntity.ok(filteredProducts);
        } catch (Exception e) {
            System.err.println("ProductController: Error occurred while filtering products.");
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }
}