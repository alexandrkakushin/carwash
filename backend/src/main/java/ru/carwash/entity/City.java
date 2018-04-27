package ru.carwash.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author a.kakushin
 */
@Entity(name = "city")
@Table(name = "CITIES")
public class City implements Catalog {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String comment;

    public City() {}

    public City(String name) {
        this.name = name;
    }

    public City(String name, String comment) {
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
