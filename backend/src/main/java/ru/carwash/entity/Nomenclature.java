package ru.carwash.entity;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity(name = "Nomenclature")
@Table(name = "NOMENCLATURES")
public class Nomenclature implements Catalog {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String comment;

    @Enumerated(EnumType.ORDINAL)
    private Type type;

    //private UnitMeasure unitMeasure;
    private float price;

    static enum Type {
        SERVICE, MATERIAL, MECHANISM
    }

    public Nomenclature() {
    }

    public Nomenclature(String name, String comment, Type type, float price) {
        this.name = name;
        this.comment = comment;
        this.type = type;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
