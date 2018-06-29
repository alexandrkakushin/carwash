package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;

/**
 * @author a.kakushin
 */
@Entity(name = "contractor")
@Table(name = "CONTRACTORS")
@Data
public class Contractor implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonView({View.Element.class, View.List.class})
    private City city;

    @ManyToOne
    @JoinColumn(name="group_id")
    @JsonView({View.Element.class, View.List.class})
    private GroupContractor group;

    @Email
    @JsonView({View.Element.class, View.List.class})
    private String email;

    @JsonView({View.Element.class, View.List.class})
    private String telephone;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    public Contractor() {}
}
