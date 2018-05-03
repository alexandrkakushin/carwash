package ru.carwash.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.carwash.entity.GroupContractor;

import java.util.Optional;

/**
 * @author a.kakushin
 */
public interface GroupsContractorRepository extends CrudRepository<GroupContractor, Long> {

    Optional<GroupContractor> findByName(String name);

}
