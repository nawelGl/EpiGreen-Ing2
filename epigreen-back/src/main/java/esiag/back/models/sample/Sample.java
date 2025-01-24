package esiag.back.models.sample;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "sample")
public class Sample {

    @Id
    @Column(name="id_sample")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSample;

    @Column(name = "date_sample")
    private Date dateSample;

    @Column(name = "string_sample")
    private String stringSample;

    @Column(name = "float_sample")
    private Float floatSample;


    @Enumerated(EnumType.STRING)
    @Column(name = "sample_type")
    private SampleType sampleType;
}
