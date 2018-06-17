package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity(name = "section")
@Table(name = "SECTIONS")
public class Section implements Catalog {

    @Id
    @GeneratedValue
    @JsonView({View.Summary.class, View.ShortView.class})
    private Long id;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String name;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String comment;

    @JsonView({View.Summary.class})
    @ManyToMany(cascade = { CascadeType.MERGE }, fetch = FetchType.LAZY)
    @JoinTable(name = "SECTION_STAGES",
            joinColumns = @JoinColumn(name = "section_id"),
            inverseJoinColumns = @JoinColumn(name = "stage_id"))
    private Set<Stage> stages = new HashSet<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "sections")
    private Set<Building> buildings = new HashSet<>();

    public Section() {
    }

    public Section(String name) {
        this.name = name;
    }

    public Section(String name, String comment) {
        this.name = name;
        this.comment = comment;
    }

    public void addStage(Stage stage) {
        this.stages.add(stage);
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

    public Set<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(Set<Building> buildings) {
        this.buildings = buildings;
    }

    public Set<Stage> getStages() {
        return stages;
    }

    public void setStages(Set<Stage> stages) {
        this.stages = stages;
    }
}
