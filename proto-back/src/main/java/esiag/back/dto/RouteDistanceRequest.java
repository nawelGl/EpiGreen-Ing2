package esiag.back.dto;

import lombok.Data;

@Data
public class RouteDistanceRequest {
    private String transportationType; // Type de transport (ex. 'voiture')
    private double distance; // Distance calculée entre les villes (en kilomètres)
    private String area ;
    // Constructeur
    public RouteDistanceRequest() {}


}

