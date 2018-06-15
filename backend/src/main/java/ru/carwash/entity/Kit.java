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

@Entity(name = "kit")
@Table(name = "kits")
@Data
public class Kit implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Summary.class, View.ShortView.class})
    private Long id;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String name;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String comment;

    @JsonView({View.Summary.class})
    @ManyToMany
    @JoinTable(name = "KIT_NOMENCLATURE",
            joinColumns = @JoinColumn(name = "kit_id"),
            inverseJoinColumns = @JoinColumn(name = "nomenclature_id"))
    private Set<Nomenclature> materials = new HashSet<>();

    public Kit() {
    }

    public Kit(String name) {
        this.name = name;
    }

    public void addMaterial(Nomenclature material) {
        this.materials.add(material);
    }
}
