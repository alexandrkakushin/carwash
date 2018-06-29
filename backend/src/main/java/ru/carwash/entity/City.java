package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity(name = "city")
@Table(name = "CITIES")
@Data
public class City implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    public City() {}
}
