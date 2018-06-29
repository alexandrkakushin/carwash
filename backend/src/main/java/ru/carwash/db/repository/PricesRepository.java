package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Nomenclature;
import ru.carwash.entity.Price;

/**
 * @author a.kakushin
 */
public interface PricesRepository extends CrudRepository<Price, Long> {

    Iterable<Price> findByNomenclature(Nomenclature nomenclature);

}
