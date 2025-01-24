package esiag.back.services.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import esiag.back.models.product.Product;
import esiag.back.repositories.product.ProductRepository;

import java.util.logging.Logger;

@Service
public class SimilarityService {

    @Autowired
    private ProductRepository productRepository;

    private static final Logger LOGGER = Logger.getLogger(SimilarityService.class.getName());

    public double calculateProductSimilarity(int productId1, int productId2) {
        double score = 0;
        double totalWeight = 100;

        // Attribute weights
        int sectionWeight = 20;
        int categoryWeight = 30;
        int colorWeight = 30;
        int materialWeight = 10;
        int priceWeight = 10;

        // Retrieve products from the database
        Product product1 = productRepository.findProductById((long) productId1);
        Product product2 = productRepository.findProductById((long) productId2);

        if (product1 == null || product2 == null) {
            LOGGER.warning("One or both products not found in the database.");
            return 0;
        }

        // Compare section
        if (product1.getSection().equalsIgnoreCase(product2.getSection())) {
            score += sectionWeight;
        }

        // Compare category
        if (product1.getCategory().equalsIgnoreCase(product2.getCategory())) {
            score += categoryWeight;
        }

        // Compare color
        if (product1.getColor().equalsIgnoreCase(product2.getColor())) {
            score += colorWeight;
        }

        // Compare material
        if (product1.getMaterial().equalsIgnoreCase(product2.getMaterial())) {
            score += materialWeight;
        }

        // Compare price with 10% tolerance
        double price1 = product1.getPrice();
        double price2 = product2.getPrice();
        double priceDifference = Math.abs(price1 - price2) / Math.max(price1, price2);
        if (priceDifference <= 0.1) {
            score += priceWeight;
        }

        return (score / totalWeight) * 100;
    }
}
