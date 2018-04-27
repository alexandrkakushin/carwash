package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.City;

/**
 * @author a.kakushin
 */
public interface CitiesRepository extends CrudRepository<City, Long> {

}
