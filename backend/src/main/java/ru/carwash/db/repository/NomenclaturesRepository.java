package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Nomenclature;

/**
 * @author a.kakushin
 */
public interface NomenclaturesRepository extends CrudRepository<Nomenclature, Long> {

    Iterable<Nomenclature> findAllByType(Nomenclature.Type type);

}
