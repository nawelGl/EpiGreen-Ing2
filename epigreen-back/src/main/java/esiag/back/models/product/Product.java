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


    public Long getIdProduct() {
        return idProduct;
    }
    public void SetIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public Integer getReference() {
        return reference;
    }
    public void SetReference(Integer reference) {
        this.reference = reference;
    }
    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getCategory() {
        return category;
    }
    public void SetCategory(String category) {
        this.category = category;
    }
    public String getSize() {
        return size;
    }
    public void SetSize(String size) {
        this.size = size;
    }
    public String getColor() {
        return color;
    }
    public void SetColor(String color) {
        this.color = color;
    }

    public String getMaterial() {
        return material;
    }
    public void SetMaterial(String material) {
        this.material = material;
    }

    public int getPrice() {
        return price;
    }
    public void SetPrice(int price) {
        this.price = price;
    }

    //methode pour imprimer
    @Override
    public String toString() {
        return "Product{" +
                "idProduct=" + idProduct +
                ", reference=" + reference +
                ", section='" + section + '\'' +
                ", category='" + category + '\'' +
                ", size='" + size + '\'' +
                ", color='" + color + '\'' +
                ", material='" + material + '\'' +
                ", price=" + price +
                '}';
    }
}