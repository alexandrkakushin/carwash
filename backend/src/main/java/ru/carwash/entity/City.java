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
@Entity(name = "city")
@Table(name = "CITIES")
@Data
public class City implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Summary.class, View.ShortView.class})
    private Long id;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String name;

    @JsonView({View.Summary.class, View.ShortView.class})
    private String comment;

    @JsonIgnore
    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private Set<Contractor> contractors = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private Set<Target> targets = new HashSet<>();

    public City() {}

    public City(String name) {
        this.name = name;
    }

    public City(String name, String comment) {
        this.name = name;
        this.comment = comment;
    }
}
