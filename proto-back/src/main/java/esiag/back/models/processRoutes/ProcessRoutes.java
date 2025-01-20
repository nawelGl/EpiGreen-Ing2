package esiag.back.models.processRoutes;


import esiag.back.models.processSteps.ProcessSteps;

import javax.persistence.*;

@Entity
@Table(name = "process_routes")
public class ProcessRoutes {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "process_routes_seq")
    @SequenceGenerator(name = "process_routes_seq", sequenceName = "process_routes_id_process_routes_seq", allocationSize = 1)
    @Column(name = "id_process_routes", nullable = false)
    private int idProcessRoutes;

    @Column(name = "type_transportation", nullable = true)
    private String typeTransportation;

    @Column(name = "carbon_footprint", nullable = false)
    private double carbonFootprint;

    @Column(name = "id_product", nullable = false)
    private int idProduct;

    @Column(name = "id_step_dep", nullable = true)
    private Integer idStepDep;

    @Column(name = "id step_arr", nullable = true)
    private Integer idStepArr;

    @Column(name = "city_arr", nullable = true)  // Changement de country en city
    private String cityArr;  // Changement de country en city

    @Column(name = "city_dep", nullable = true)  // Changement de country en city
    private String cityDep;  // Changement de country en city

    // Relations avec les autres entités
    @ManyToOne
    @JoinColumn(name = "id_step_dep", referencedColumnName = "id_process_step", insertable = false, updatable = false)
    private ProcessSteps stepDep;

    @ManyToOne
    @JoinColumn(name = "id step_arr", referencedColumnName = "id_process_step", insertable = false, updatable = false)
    private ProcessSteps stepArr;
    //TODO : need to change when i will create the object Product
    /**
    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "product_Id", insertable = false, updatable = false)
    private Product product;
    */



}

