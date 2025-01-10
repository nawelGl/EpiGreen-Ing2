package esiag.back.models.address;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "address")
public class Address {

    @Id
    @Column(name = "address_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

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
