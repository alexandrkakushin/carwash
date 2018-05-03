package ru.carwash.entity;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "TARGETS")
public class Target implements Catalog {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "building_id")
    private Building building;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

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
