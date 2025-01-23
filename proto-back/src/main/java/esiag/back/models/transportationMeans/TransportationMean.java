package esiag.back.models.transportationMeans;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "ref_transportation_means")
public class TransportationMean {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transportation_means", nullable = false)
    private int idTransportationMeans;

    @Column(name = "consumption", nullable = false)
    private double consumption;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "distance_min", nullable = false)
    private double distanceMin;

    @Column(name = "distance_max", nullable = false)
    private double distanceMax;

    @Column(name = "area", nullable = false)
    private String area;

}

