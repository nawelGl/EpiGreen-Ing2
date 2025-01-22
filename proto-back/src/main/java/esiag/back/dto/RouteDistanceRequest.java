package esiag.back.dto;

public class RouteDistanceRequest {
    private String transportationType; // Type de transport (ex. 'voiture')
    private double distance; // Distance calculée entre les villes (en kilomètres)

    // Constructeur
    public RouteDistanceRequest() {}

    // Getters et Setters
    public String getTransportationType() {
        return transportationType;
    }

    public void setTransportationType(String transportationType) {
        this.transportationType = transportationType;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }
}

