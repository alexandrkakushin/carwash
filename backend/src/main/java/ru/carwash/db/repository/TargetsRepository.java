package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Target;

/**
 * @author a.kakushin
 */
public interface TargetsRepository extends CrudRepository<Target, Long> {
}
