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


    public Date getDateSample() {
        return dateSample;
    }
    public void setDateSample(Date dateSample) {
        this.dateSample = dateSample;
    }
    public String getStringSample() {
        return stringSample;
    }
    public void setStringSample(String stringSample) {
        this.stringSample = stringSample;
    }
    public Float getFloatSample() {
        return floatSample;
    }
    public void setFloatSample(Float floatSample) {
        this.floatSample = floatSample;
    }

    public Long getIdSample() {
        return idSample;
    }
    public void setIdSample(Long idSample) {
        this.idSample = idSample;
    }

    //annotation

    @Enumerated(EnumType.STRING)
    @Column(name = "sample_type")
    private SampleType sampleType;
}
