package esiag.back.models.transportationMeans;
import javax.persistence.*;

@Entity
@Table(name = "ref_transportation_means")
public class TransportationMeans {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transportation_means_seq")
    @SequenceGenerator(name = "transportation_means_seq", sequenceName = "transportation_means_id_transportation_means_seq", allocationSize = 1)
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

    @Enumerated(EnumType.STRING)
    @Column(name = "aera", nullable = false)
    private Area area;

}

