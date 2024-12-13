package esiag.back.models.customer;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "Customer")
public class Customer{
    @Id
    @Column(name="CustomerId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;

    @Column(name = "Lastname")
    private String lastname;

    @Column(name = "Firstname")
    private String fristname;

    @Column(name = "Birthdate")
    private Date birthdate;

    @Column(name = "StreetNumber")
    private int streetNumber;

    @Column(name = "Street")
    private String street;

    @Column(name = "ZipCode")
    private int zipCode;

    @Column(name = "City")
    private String city;
}