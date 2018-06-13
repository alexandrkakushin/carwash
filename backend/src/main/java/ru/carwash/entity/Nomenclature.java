package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity(name = "Nomenclature")
@Table(name = "NOMENCLATURES")
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Nomenclature implements Catalog {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private Long id;

    @JsonView(View.Summary.class)
    private String article;

    @JsonView(View.Summary.class)
    private String name;

    @JsonView(View.Summary.class)
    private String comment;

    @JsonView(View.Summary.class)
    @Enumerated(EnumType.ORDINAL)
    private Type type;

    @ManyToOne
    @JoinColumn(name="unit_id")
    @JsonView(View.Summary.class)
    private Unit unit;

    @JsonView(View.Summary.class)
    private float price;

    @OneToMany(mappedBy = "service", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Stage> stagesService = new HashSet<>();

    @OneToMany(mappedBy = "material", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Stage> stagesMaterial = new HashSet<>();

    @OneToMany(mappedBy = "mechanism", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Stage> stagesMechanism = new HashSet<>();


    public Nomenclature() {
    }

    public Nomenclature(String name, Type type, float price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }

    public Nomenclature(String article, String name, Type type, float price) {
        this.article = article;
        this.name = name;
        this.type = type;
        this.price = price;
    }

    public Nomenclature(String article, String name, Type type, Unit unit, float price) {
        this.article = article;
        this.name = name;
        this.type = type;
        this.unit = unit;
        this.price = price;
    }

    public static enum Type {
        SERVICE, MATERIAL, MECHANISM
    }
}
