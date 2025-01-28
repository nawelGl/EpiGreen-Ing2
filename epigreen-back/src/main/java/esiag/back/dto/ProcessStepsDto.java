package esiag.back.dto;

public class ProcessStepsDto {

    private int idProcessStep;
    private String stepName;
    private double consumption;

    // Constructeurs
    public ProcessStepsDto() {}

    public ProcessStepsDto(int idProcessStep, String stepName, double consumption) {
        this.idProcessStep = idProcessStep;
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
        return "ProcessStepsDto{" +
                "idProcessStep=" + idProcessStep +
                ", stepName='" + stepName + '\'' +
                ", consumption=" + consumption +
                '}';
    }
}