package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Stage;

/**
 * @author a.kakushin
 */
public interface StagesRepository extends CrudRepository<Stage, Long> {
}
