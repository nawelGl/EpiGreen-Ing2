package esiag.back.models.processRoute;
import esiag.back.models.transportationMeans.Area;
import lombok.Data;
import javax.persistence.*;


@Entity
@Data
@Table(name = "process_route")
public class ProcessRoute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_process_route", nullable = false)
    private Long idProcessRoutes;

    @Column(name = "type_transportation", nullable = true)
    private String typeTransportation;

    @Column(name = "carbon_footprint", nullable = false)
    private double carbonFootprint;

    @Column(name = "id_product", nullable = true)
    private Long idProduct;

    @Column(name = "id_step_dep", nullable = true)
    private Integer idStepDep;

    @Column(name = "id_step_arr", nullable = true)
    private Integer idStepArr;

    @Column(name = "city_arr", nullable = true)
    private String cityArr;

    @Column(name = "city_dep", nullable = true)
    private String cityDep;

    @Column(name = "area", nullable = true)
    private String area;



}

