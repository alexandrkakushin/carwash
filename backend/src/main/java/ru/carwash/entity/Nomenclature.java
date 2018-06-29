package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity(name = "nomenclature")
@Table(name = "NOMENCLATURES")
@Data
public class Nomenclature implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String article;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    @JsonView({View.Element.class, View.List.class})
    @Enumerated(EnumType.ORDINAL)
    private Type type;

    @ManyToOne
    @JoinColumn(name="unit_id")
    @JsonView({View.Element.class, View.List.class})
    private Unit unit;

    @JsonView({View.Element.class, View.List.class})
    private float price;

    public Nomenclature() {}

    public enum Type {
        SERVICE, MATERIAL, MECHANISM
    }
}
