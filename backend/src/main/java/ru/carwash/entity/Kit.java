package ru.carwash.entity;

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
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    @ManyToOne
    @JoinColumn(name = "main_id")
    @JsonView(View.Element.class)
    private Nomenclature main;

    @ManyToMany(cascade = { CascadeType.MERGE }, fetch = FetchType.EAGER)
    @JoinTable(name = "KIT_NOMENCLATURE",
            joinColumns = @JoinColumn(name = "kit_id"),
            inverseJoinColumns = @JoinColumn(name = "nomenclature_id"))
    @JsonView({View.Element.class})
    private Set<Nomenclature> materials = new HashSet<>();

    public Kit() {}
}
