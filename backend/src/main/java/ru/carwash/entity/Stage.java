package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity
@Table(name = "STAGES")
public class Stage implements Catalog {

    @Id
    @GeneratedValue
    @JsonView(View.ShortView.class)
    private Long id;

    @JsonView(View.ShortView.class)
    private String name;

    @JsonView(View.ShortView.class)
    private String comment;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "SECTION_STAGES",
            joinColumns = @JoinColumn(name = "stage_id"),
            inverseJoinColumns = @JoinColumn(name = "section_id"))
    private Set<Section> sections = new HashSet<>();

//    @ManyToOne
//    @JoinColumn(name = "material_id")
//    @JsonView(View.Summary.class)
//    private Nomenclature material;
//
//    @ManyToOne
//    @JoinColumn(name = "service_id")
//    @JsonView(View.Summary.class)
//    private Nomenclature service;
//
//    @ManyToOne
//    @JoinColumn(name = "mechanism_id")
//    @JsonView(View.Summary.class)
//    private Nomenclature mechanism;

    public Stage() {
    }

    public Stage(String name) {
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

//
//
//
//    public Set<Section> getSections() {
//        return sections;
//    }
//
//    public void setSections(Set<Section> sections) {
//        this.sections = sections;
//    }
//
//    public Nomenclature getService() {
//        return service;
//    }
//
//    public void setService(Nomenclature service) {
//        this.service = service;
//    }
//
//    public Nomenclature getMaterial() {
//        return material;
//    }
//
//    public void setMaterial(Nomenclature material) {
//        this.material = material;
//    }
//
//    public Nomenclature getMechanism() {
//        return mechanism;
//    }
//
//    public void setMechanism(Nomenclature mechanism) {
//        this.mechanism = mechanism;
//    }
}
