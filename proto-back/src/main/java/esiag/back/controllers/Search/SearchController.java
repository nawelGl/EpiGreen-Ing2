package esiag.back.controllers.search;

import esiag.back.models.sample.Product;
import esiag.back.services.sample.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/search")
public class SearchController {

    @GetMapping
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keywords) {
        List<Product> results = productService.searchByKeywords(keywords);
        return ResponseEntity.ok(results);
    }
}