package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Kit;

/**
 * @author a.kakushin
 */
public interface KitsRepository extends CrudRepository<Kit, Long> {
}
