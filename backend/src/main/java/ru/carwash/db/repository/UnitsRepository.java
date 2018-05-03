package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Unit;

import java.util.Optional;

/**
 * @author a.kakushin
 */
public interface UnitsRepository extends CrudRepository<Unit, Long> {

    Optional<Unit> findByName(String name);

}
