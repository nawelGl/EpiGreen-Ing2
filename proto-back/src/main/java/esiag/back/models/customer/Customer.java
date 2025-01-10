package esiag.back.models.customer;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import esiag.back.models.address.Address;

@Entity
@Data
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "birthdate")
    private LocalDate birthdate;

    @ManyToOne
    @JoinColumn(name = "address_id", referencedColumnName = "address_id", nullable = false)
    private Address address;
}
