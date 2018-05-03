package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.Contractor;

/**
 * @author a.kakushin
 */
public interface ContractorsRepository extends CrudRepository<Contractor, Long> {
}
