package esiag.back.models.entrepot;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "entrepot")
public class Entrepot {

    @Id
    @Column(name = "entrepot_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entrepotId;

    @Column(name = "address")
    private String address;
}
