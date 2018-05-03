package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Building;

/**
 * @author a.kakushin
 */
public interface BuildingsRepository extends CrudRepository<Building, Long> {
}
