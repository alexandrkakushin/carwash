package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Unit;

/**
 * @author a.kakushin
 */
public interface UnitsRepository extends CrudRepository<Unit, Long> {
}
