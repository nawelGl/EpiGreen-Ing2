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

    @Column(name = "emission_factor")
    private Float emissionFactor;

}
