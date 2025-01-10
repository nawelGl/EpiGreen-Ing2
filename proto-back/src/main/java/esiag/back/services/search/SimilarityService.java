package esiag.back.services.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import esiag.back.models.product.Product;
import esiag.back.repositories.product.ProductRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class SimilarityService {

    // todo: set logger
    @Autowired
    private ProductRepository productRepository;

    private static final Logger LOGGER = Logger.getLogger( SimilarityService.class.getName() );

    private double calculateProductSimilarity(int product_id1, int product_id2) {
        double score = 0;
        double totalWeight = 100;

        // Pondérations de poids
        int sectionWeight = 20;
        int categoryWeight = 30;
        int colorWeight = 30;
        int materialWeight = 10;
        int priceWeight= 10;

        Product product1= productRepository.findProductById(product_id1);
        Product product2= productRepository.findProductById(product_id2);

        // comparaison avec la section (homme/femme/enfant)
        String sectionP1 = product1.getSection().toLowerCase();
        String sectionP2 = product2.getSection().toLowerCase();
        if (sectionP1==sectionP2) {
            score += sectionWeight;
        }

        // comparaison pour la catérogie
        String categoryP1 = product1.getCategory().toLowerCase();
        String categoryP2 = product2.getCategory().toLowerCase();
        if (categoryP1==categoryP2) {
            score += categoryWeight;
        }


        // Comparaison avec la couleur
        String colorP1 = product1.getColor().toLowerCase();
        String colorP2 = product2.getColor().toLowerCase();
        if (colorP1==colorP2) {
            score += colorWeight;
        }

        // Comparaison avec la section
        String materialP1 = product1.getMaterial().toLowerCase();
        String materialP2 = product2.getMaterial().toLowerCase();

        if (material.contains(keyword)) {
            score += materialWeight;
        }
        return (score / totalWeight) * 100;
    }

}

