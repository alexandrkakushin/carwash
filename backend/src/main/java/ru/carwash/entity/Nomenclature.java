package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity(name = "Nomenclature")
@Table(name = "NOMENCLATURES")
public class Nomenclature implements Catalog {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String article;
    private String name;
    private String comment;

    @Enumerated(EnumType.ORDINAL)
    private Type type;

    @ManyToOne
    @JoinColumn(name="unit_id")
    private Unit unit;

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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
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

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Set<Stage> getStagesService() {
        return stagesService;
    }

    public void setStagesService(Set<Stage> stagesService) {
        this.stagesService = stagesService;
    }

    public Set<Stage> getStagesMaterial() {
        return stagesMaterial;
    }

    public void setStagesMaterial(Set<Stage> stagesMaterial) {
        this.stagesMaterial = stagesMaterial;
    }

    public Set<Stage> getStagesMechanism() {
        return stagesMechanism;
    }

    public void setStagesMechanism(Set<Stage> stagesMechanism) {
        this.stagesMechanism = stagesMechanism;
    }

    public static enum Type {
        SERVICE, MATERIAL, MECHANISM
    }
}
