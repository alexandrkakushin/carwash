package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "TARGETS")
public class Target implements Catalog {

    @Id
    @GeneratedValue
    @JsonView(View.ShortView.class)
    private Long id;

    @JsonView(View.ShortView.class)
    private String name;

    @JsonView(View.ShortView.class)
    private String comment;

    @ManyToOne
    @JoinColumn(name = "building_id")
    @JsonView(View.ShortView.class)
    private Building building;

    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonView(View.ShortView.class)
    private City city;

    @JsonView(View.ShortView.class)
    private int point;

    public Target() {
    }

    public Target(String name, String comment, Building building, City city) {
        this.name = name;
        this.comment = comment;
        this.building = building;
        this.city = city;
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

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }
}
