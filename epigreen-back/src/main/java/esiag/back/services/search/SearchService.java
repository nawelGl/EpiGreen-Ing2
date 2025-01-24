package esiag.back.services.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import esiag.back.models.product.Product;
import esiag.back.repositories.product.ProductRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class SearchService {

    // todo: set logger
    @Autowired
    private ProductRepository productRepository;

    private static final Logger LOGGER = Logger.getLogger( SearchService.class.getName() );

    public List<Product> findSimilarProducts(String keywords) {

        LOGGER.info("keywords:"+keywords);
        List<Product> products = productRepository.findAll(); // get all products to compare the simility
        List<String> keywordList = List.of(keywords.toLowerCase().split(" ")); // split keywords in words

        // Liste pour stocker les résultats
        List<Product> similarProducts = new ArrayList<>();

        for (Product product : products) {
            double similarityScore = calculateKeywordSimilarity(keywordList, product);
            if (similarityScore >= 60) { // Seulement les produits avec un score > 60%
                similarProducts.add(product);
            }
        }

        return similarProducts;
    }

    private double calculateKeywordSimilarity(List<String> keywords, Product product) {
        double score = 0;
        double totalWeight = 100;

        // Pondérations de poids
        int sectionWeight = 20;
        int categoryWeight = 30;
        int colorWeight = 30;
        int materialWeight = 20;


        // comparaison avec la section (homme/femme/enfant)
        String section = product.getSection().toLowerCase();
        for (String keyword : keywords) {
            if (section.contains(keyword)) {
                score += sectionWeight;
            }
        }
        // comparaison pour la catérogie
        String category = product.getCategory().toLowerCase();
        for (String keyword : keywords) {
            if (category.contains(keyword)) {
                score += categoryWeight;
            }
        }

            // Comparaison avec la couleur
        String color = product.getColor().toLowerCase();
        for (String keyword : keywords) {
            if (color.contains(keyword)) {
                score += colorWeight;
            }
        }
            // Comparaison avec la section
        String material = product.getMaterial().toLowerCase();
        for (String keyword : keywords) {
            if (material.contains(keyword)) {
                score += materialWeight;
            }
        }

            return (score / totalWeight) * 100;
        }

}

