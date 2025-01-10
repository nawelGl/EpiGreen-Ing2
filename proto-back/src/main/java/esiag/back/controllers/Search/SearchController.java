package esiag.back.controllers.search;

import esiag.back.models.product.Product;
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


    @PostMapping("/similarity-search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keywords) {
        List<Product> results = searchService.findSimilarProducts(keywords);
        return ResponseEntity.ok(results);
    }
}