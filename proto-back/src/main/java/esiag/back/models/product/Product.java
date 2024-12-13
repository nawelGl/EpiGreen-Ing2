package esiag.back.models.sample;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;


@Entity
@Data
@Table(name="Product")
public class Product {
    @Id
    @Column(name="idProduct")
    private Long idProduct;

    @Column(name="Reference")
    private Integer reference;

    @Column(name="Section")
    private String section ;

    @Column(name="Size")
    private String size;

    @Column(name="Color")
    private String color;

    @Column(name="Material")
    private String material;

    @Column(name="Price")
    private int price;
}