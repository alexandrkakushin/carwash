package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.City;

import java.util.Optional;

/**
 * @author a.kakushin
 */
public interface CitiesRepository extends CrudRepository<City, Long> {

    Optional<City> findByName(String name);

}
