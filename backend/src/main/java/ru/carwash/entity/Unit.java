package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "UNITS")
public class Unit implements Catalog {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String comment;

    @OneToMany(mappedBy = "unit", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Nomenclature> nomenclatures = new HashSet<Nomenclature>();

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

    public Set<Nomenclature> getNomenclatures() {
        return nomenclatures;
    }

    public void setNomenclatures(Set<Nomenclature> nomenclatures) {
        this.nomenclatures = nomenclatures;
    }
}