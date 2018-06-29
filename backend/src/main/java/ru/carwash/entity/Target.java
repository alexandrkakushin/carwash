package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity(name = "target")
@Table(name = "TARGETS")
@Data
public class Target implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    @ManyToOne
    @JoinColumn(name = "building_id")
    @JsonView({View.Element.class, View.List.class})
    private Building building;

    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonView({View.Element.class, View.List.class})
    private City city;

    @JsonView({View.Element.class, View.List.class})
    private int point;

    public Target() {}
}
