package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "UNITS")
@Data
public class Unit implements Catalog {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private Long id;

    @JsonView(View.Summary.class)
    private String code;

    @JsonView(View.Summary.class)
    private String name;

    @JsonView(View.Summary.class)
    private String comment;

    @OneToMany(mappedBy = "unit", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Nomenclature> nomenclatures = new HashSet<Nomenclature>();

    public Unit() {
    }

    public Unit(String name) {
        this.name = name;
    }

    public Unit(String code, String name) {
        this.code = code;
        this.name = name;
    }
 }
