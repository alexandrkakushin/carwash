package ru.carwash.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long id;

    @ManyToOne
    @JoinColumn(name = "nomenclature_id")
    @JsonIgnore
    private Nomenclature nomenclature;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    private LocalDate date;
    private float value;

    public Price() {}
}
