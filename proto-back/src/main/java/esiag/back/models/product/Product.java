package esiag.back.models.product;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;


@Entity
@Data
@Table(name="product")
public class Product {
    @Id
    @Column(name="product_id")
    private Long idProduct;

    @Column(name="reference")
    private Integer reference;

    @Column(name="section")
    private String section;

    @Column(name="category")
    private String category;

    @Column(name="size")
    private String size;

    @Column(name="color")
    private String color;

    @Column(name="material")
    private String material;

    @Column(name="price")
    private int price;
}