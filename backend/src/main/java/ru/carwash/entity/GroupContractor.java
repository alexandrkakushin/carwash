package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "GROUPS_CONTRACTORS")
public class GroupContractor implements Catalog {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String comment;

    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Contractor> contractors = new HashSet<Contractor>();


    public GroupContractor() {
    }

    public GroupContractor(String name) {
        this.name = name;
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

    public Set<Contractor> getContractors() {
        return contractors;
    }

    public void setContractors(Set<Contractor> contractors) {
        this.contractors = contractors;
    }
}
