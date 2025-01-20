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


}

