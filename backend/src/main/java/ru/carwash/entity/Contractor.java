package ru.carwash.entity;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "CONTRACTORS")
public class Contractor implements Catalog {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToOne
    @JoinColumn(name="group_id")
    private GroupContractor group;

    private String email;
    private String telephone;

    private String comment;

    public Contractor() {
    }

    public Contractor(String name, City city, GroupContractor group) {
        this.name = name;
        this.city = city;
        this.group = group;
    }

    public Contractor(String name, City city, GroupContractor group, String email, String telephone, String comment) {
        this.name = name;
        this.city = city;
        this.group = group;
        this.email = email;
        this.telephone = telephone;
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

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public GroupContractor getGroup() {
        return group;
    }

    public void setGroup(GroupContractor group) {
        this.group = group;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
