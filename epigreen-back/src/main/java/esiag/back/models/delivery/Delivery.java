package esiag.back.models.delivery;

import esiag.back.models.account.Account;
import esiag.back.models.entrepot.Entrepot;
import esiag.back.models.transportation.Transportation;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "delivery")
public class Delivery {

    @Id
    @Column(name = "delivery_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long deliveryId;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id", nullable = false)
    private Account account;

    @ManyToOne
    @JoinColumn(name = "entrepot_id", referencedColumnName = "entrepot_id", nullable = false)
    private Entrepot entrepot;

    @ManyToOne
    @JoinColumn(name = "transportation_id", referencedColumnName = "transportation_id", nullable = false)
    private Transportation transportation;

}
