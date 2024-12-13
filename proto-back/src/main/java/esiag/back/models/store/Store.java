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
    private int storeId;

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

    @Column(name = "x")
    private int x;

    @Column(name = "y")
    private int y;

    //Constructeur sans paramètres :
    public Store(){

    }

    //Accesseurs :
    public int getStoreId() {
        return storeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(int streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }
}