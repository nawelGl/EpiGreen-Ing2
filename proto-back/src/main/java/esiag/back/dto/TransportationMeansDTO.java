package esiag.back.dto;

import esiag.back.models.transportationMeans.Area;
import lombok.Data;

@Data
public class TransportationMeansDTO {

    private int idTransportationMeans;
    private double consumption;
    private String type;
    private double distanceMin;
    private double distanceMax;
    private Area area;

    // Constructeurs
    public TransportationMeansDTO() {}

    public TransportationMeansDTO(int idTransportationMeans, double consumption, String type, double distanceMin, double distanceMax, Area area) {
        this.idTransportationMeans = idTransportationMeans;
        this.consumption = consumption;
        this.type = type;
        this.distanceMin = distanceMin;
        this.distanceMax = distanceMax;
        this.area = area;
    }

    // Getters et setters
    public int getIdTransportationMeans() {
        return idTransportationMeans;
    }

    public void setIdTransportationMeans(int idTransportationMeans) {
        this.idTransportationMeans = idTransportationMeans;
    }

    public double getConsumption() {
        return consumption;
    }

    public void setConsumption(double consumption) {
        this.consumption = consumption;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getDistanceMin() {
        return distanceMin;
    }

    public void setDistanceMin(double distanceMin) {
        this.distanceMin = distanceMin;
    }

    public double getDistanceMax() {
        return distanceMax;
    }

    public void setDistanceMax(double distanceMax) {
        this.distanceMax = distanceMax;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    // Méthode toString
    @Override
    public String toString() {
        return "TransportationMeansDTO{" +
                "idTransportationMeans=" + idTransportationMeans +
                ", consumption=" + consumption +
                ", type='" + type + '\'' +
                ", distanceMin=" + distanceMin +
                ", distanceMax=" + distanceMax +
                ", area=" + area +
                '}';
    }
}
