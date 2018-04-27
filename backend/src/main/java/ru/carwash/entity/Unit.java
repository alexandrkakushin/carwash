package ru.carwash.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author a.kakushin
 */
@Entity(name = "Unit")
@Table(name = "UNITS")
public class Unit implements Catalog {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String comment;

    public Unit() {
    }

    public Unit(String name) {
        this.name = name;
    }

    public Unit(String name, String comment) {
        this.name = name;
        this.comment = comment;
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
}
