package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity(name = "Nomenclature")
@Table(name = "NOMENCLATURES")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Nomenclature implements Catalog {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Summary.class, View.ShortView.class})
    private Long id;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String article;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String name;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String comment;

    @JsonView({View.Summary.class, View.ShortView.class})
    @Enumerated(EnumType.ORDINAL)
    private Type type;

    @ManyToOne
    @JoinColumn(name="unit_id")
    @JsonView({View.Summary.class, View.ShortView.class})
    private Unit unit;

    @JsonView({View.Summary.class, View.ShortView.class})
    private float price;

    @JsonIgnore
    @ManyToMany(mappedBy = "materials")
//    @JoinTable(name = "KIT_NOMENCLATURE",
//            joinColumns = @JoinColumn(name = "nomenclature_id"),
//            inverseJoinColumns = @JoinColumn(name = "kit_id"))
    private Set<Kit> kits = new HashSet<>();

    @OneToMany(mappedBy = "service", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Stage> stagesService = new HashSet<>();

//    @OneToMany(mappedBy = "material", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private Set<Stage> stagesMaterial = new HashSet<>();

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

    public Set<Kit> getKits() {
        return kits;
    }

    public void setKits(Set<Kit> kits) {
        this.kits = kits;
    }


    public static enum Type {
        SERVICE, MATERIAL, MECHANISM
    }

}
