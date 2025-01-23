package esiag.back.models.refProcessStep;


import javax.persistence.*;

@Entity
@Table(name = "ref_process_step", schema = "public")
public class RefProcessStep {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ref_process_step_seq")
    @SequenceGenerator(name = "ref_process_step_seq", sequenceName = "ref_process_step_id_process_step_seq", allocationSize = 1)
    @Column(name = "id_process_step", nullable = false)
    private Integer idProcessStep;

    @Column(name = "step_name", length = 255)
    private String stepName;

    @Column(name = "consumption")
    private Double consumption;

    // Getters and Setters
    public Integer getIdProcessStep() {
        return idProcessStep;
    }

    public void setIdProcessStep(Integer idProcessStep) {
        this.idProcessStep = idProcessStep;
    }

    public String getStepName() {
        return stepName;
    }

    public void setStepName(String stepName) {
        this.stepName = stepName;
    }

    public Double getConsumption() {
        return consumption;
    }

    public void setConsumption(Double consumption) {
        this.consumption = consumption;
    }

    // toString method for debugging
    @Override
    public String toString() {
        return "RefProcessStep{" +
                "idProcessStep=" + idProcessStep +
                ", stepName='" + stepName + '\'' +
                ", consumption=" + consumption +
                '}';
    }
}

