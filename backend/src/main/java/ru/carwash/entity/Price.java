package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * @author a.kakushin
 */
@Entity(name = "price")
@Table(name = "prices")
@Data
public class Price {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView({View.Element.class, View.List.class})
    private Long id;

    @ManyToOne
    @JoinColumn(name = "nomenclature_id")
    @JsonView({View.Element.class})
    private Nomenclature nomenclature;

    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonView({View.Element.class, View.List.class})
    private City city;

    @JsonView({View.Element.class, View.List.class})
    private LocalDate date;

    @JsonView({View.Element.class, View.List.class})
    private float value;

    public Price() {}
}
