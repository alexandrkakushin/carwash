package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;

/**
 * @author a.kakushin
 */
@Entity(name = "stage")
@Table(name = "STAGES")
@Data
public class Stage implements Catalog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @JsonView({View.Element.class, View.List.class})
    private String name;

    @JsonView({View.Element.class, View.List.class})
    private String comment;

    @JsonView({View.Element.class, View.List.class})
    private Float volume;

    @ManyToOne
    @JoinColumn(name = "kit_id")
    @JsonView({View.Element.class, View.List.class})
    private Kit kit;

    @ManyToOne
    @JoinColumn(name = "service_id")
    @JsonView({View.Element.class, View.List.class})
    private Nomenclature service;

    @ManyToOne
    @JoinColumn(name = "mechanism_id")
    @JsonView({View.Element.class, View.List.class})
    private Nomenclature mechanism;

    public Stage() {}
}
