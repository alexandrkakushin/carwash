package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity(name = "unit")
@Table(name = "UNITS")
@Data
public class Unit implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String code;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    public Unit() {}

    public Unit(String code, String name) {
        this.code = code;
        this.name = name;
    }
}
