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
@Entity
@Table(name = "GROUPS_CONTRACTORS")
@Data
public class GroupContractor implements Catalog {

    @Id
    @GeneratedValue
    @JsonView(View.Summary.class)
    private Long id;

    @JsonView(View.Summary.class)
    private String name;

    @JsonView(View.Summary.class)
    private String comment;

    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Contractor> contractors = new HashSet<Contractor>();

    public GroupContractor() {}

    public GroupContractor(String name) {
        this.name = name;
    }
}
