package esiag.back.models.store;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Data
@Table(name = "Store")
public class Store{
    @Id
    @Column(name="StoreId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;

    @Column(name = "Name")
    private String name;

    @Column(name = "StreetNumber")
    private int streetNumber;

    @Column(name = "Street")
    private String street;

    @Column(name = "ZipCode")
    private int zipCode;

    @Column(name = "City")
    private String city;
}