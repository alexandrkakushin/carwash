package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity(name = "building")
@Table(name = "BUILDINGS")
@Data
public class Building implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "BUILDING_SECTIONS",
            joinColumns = @JoinColumn(name = "building_id"),
            inverseJoinColumns = @JoinColumn(name = "section_id"))
    @JsonView({View.Element.class})
    private Set<Section> sections = new HashSet<>();

    public Building() {}
}
