package esiag.back.controllers.search;

import esiag.back.models.product.Product;
import esiag.back.services.search.SimilarityService;
import esiag.back.services.search.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api")
public class SearchController {
    @Autowired
    private SearchService searchService;
    @Autowired
    private SimilarityService similarityService;


    @PostMapping("/similarity-search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keywords) {
        List<Product> results = searchService.findSimilarProducts(keywords);
        return ResponseEntity.ok(results);
    }
    @PostMapping("/similarityById")
    public ResponseEntity<Double> searchProducts(@RequestParam("productId1") int productId1,@RequestParam("productId2") int productId2) {
        System.out.println("Product ID 1: " + productId1 + ", Product ID 2: " + productId2);
        double result = similarityService.calculateProductSimilarity(productId1,productId2);
        return ResponseEntity.ok(result);
    }
}