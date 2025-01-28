package esiag.back.models.processSteps;


import javax.persistence.*;

@Entity
@Table(name = "ref_process_step")
public class ProcessSteps {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "process_step_seq")
    @SequenceGenerator(name = "process_step_seq", sequenceName = "ref_process_step_id_process_step_seq", allocationSize = 1)
    @Column(name = "id_process_step", nullable = false)
    private int idProcessStep;

    @Column(name = "step_name", nullable = true)
    private String stepName;

    @Column(name = "consumption", nullable = false)
    private double consumption;

    // Constructeurs
    public ProcessSteps() {}

    public ProcessSteps(String stepName, double consumption) {
        this.stepName = stepName;
        this.consumption = consumption;
    }

    // Getters et setters
    public int getIdProcessStep() {
        return idProcessStep;
    }

    public void setIdProcessStep(int idProcessStep) {
        this.idProcessStep = idProcessStep;
    }

    public String getStepName() {
        return stepName;
    }

    public void setStepName(String stepName) {
        this.stepName = stepName;
    }

    public double getConsumption() {
        return consumption;
    }

    public void setConsumption(double consumption) {
        this.consumption = consumption;
    }

    // Méthode toString
    @Override
    public String toString() {
        return "ProcessSteps{" +
                "idProcessStep=" + idProcessStep +
                ", stepName='" + stepName + '\'' +
                ", consumption=" + consumption +
                '}';
    }
}

