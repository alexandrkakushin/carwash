package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author a.kakushin
 */
@Entity(name = "section")
@Table(name = "SECTIONS")
@Data
public class Section implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    @JsonView({View.Element.class})
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "SECTION_STAGES",
            joinColumns = @JoinColumn(name = "section_id"),
            inverseJoinColumns = @JoinColumn(name = "stage_id"))
    private Set<Stage> stages = new HashSet<>();

    public Section() {}
}
