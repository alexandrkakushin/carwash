package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Section;

/**
 * @author a.kakushin
 */
public interface SectionsRepository extends CrudRepository<Section, Long> {
}
