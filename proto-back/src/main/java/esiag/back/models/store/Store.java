package esiag.back.models.store;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Data
@Table(name = "store")
public class Store{

    @Id
    @Column(name="store_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer storeId;

    @Column(name = "name")
    private String name;

    @Column(name = "street_number")
    private Integer streetNumber;

    @Column(name = "street")
    private String street;

    @Column(name = "zipcode")
    private Integer zipCode;

    @Column(name = "city")
    private String city;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

}