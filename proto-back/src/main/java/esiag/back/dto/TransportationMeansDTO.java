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
