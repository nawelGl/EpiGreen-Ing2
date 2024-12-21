package esiag.back.models.customer;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "Customer")
public class Customer {

    @Id
    @Column(name = "CustomerId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column(name = "Lastname")
    private String lastname;

    @Column(name = "Firstname")
    private String firstname;

    @Column(name = "Birthdate")
    private LocalDate birthdate;

    @Column(name = "StreetNumber")
    private Integer streetNumber;

    @Column(name = "Street")
    private String street;

    @Column(name = "ZipCode")
    private Integer zipCode;

    @Column(name = "City")
    private String city;

    @Column(name = "x")
    private Double x;

    @Column(name = "y")
    private Double y;
}
