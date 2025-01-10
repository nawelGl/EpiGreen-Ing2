package esiag.back.models.transportation;

import esiag.back.models.sample.SampleType;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "transportation")
public class Transportation {

    @Id
    @Column(name="transportation_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transportationId;

    @Enumerated(EnumType.STRING)
    @Column(name = "transportation_type")
    private TransportationType transportationType;

    @Column(name = "kg_co2")
    private Float kgCo2;

    @Column(name = "tons")
    private Float tons;

    @Enumerated(EnumType.STRING)
    @Column(name = "motorisation")
    private TransportationMotorisationType motorisation;
}
