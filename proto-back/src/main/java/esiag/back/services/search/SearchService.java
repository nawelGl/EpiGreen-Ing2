package esiag.back.services.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import esiag.back.models.sample.Product;
import esiag.back.models.sample.ProductType;
import esiag.back.repositories.sample.ProductRepository;
import java.util.ArrayList;
import java.util.List;

@Service
public class SimilarityService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> findSimilarProducts(String keywords) {
        List<Product> products = productRepository.findAll(); // Charger tous les produits
        List<String> keywordList = List.of(keywords.toLowerCase().split(" ")); // Diviser les mots-clés

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

        // Pondérations
        int nameWeight = 40;
        int descriptionWeight = 30;
        int categoryWeight = 20;
        int colorWeight = 10;

        // Comparaison avec le nom
        String name = product.getName().toLowerCase();
        for (String keyword : keywords) {
            if (name.contains(keyword)) {
                score += nameWeight / (double) keywords.size();
            }
        }

        // Comparaison avec la description
        String description = product.getDescription().toLowerCase();
        for (String keyword : keywords) {
            if (description.contains(keyword)) {
                score += descriptionWeight / (double) keywords.size();
            }
        }

        // Comparaison avec la catégorie
        String category = product.getCategory().toLowerCase();
        for (String keyword : keywords) {
            if (category.contains(keyword)) {
                score += categoryWeight / (double) keywords.size();
            }
        }

        // Comparaison avec la couleur
        String color = product.getColor().toLowerCase();
        for (String keyword : keywords) {
            if (color.contains(keyword)) {
                score += colorWeight / (double) keywords.size();
            }
        }

        return (score / totalWeight) * 100;
    }
}
