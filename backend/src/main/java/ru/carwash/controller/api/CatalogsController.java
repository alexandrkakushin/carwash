package ru.carwash.controller.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.carwash.db.repository.CitiesRepository;
import ru.carwash.db.repository.UnitsRepository;
import ru.carwash.entity.Catalog;
import ru.carwash.entity.City;
import ru.carwash.entity.Unit;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author a.kakushin
 */
@RestController
@RequestMapping("/api/catalogs")
public class CatalogsController {

    private Map<String, EntityRepository> repositories = new HashMap<>();

    private EntityRepository getEntityRepository(String catalog) {
        EntityRepository result = repositories.get(catalog);
        if (result == null) {
            if (catalog.toLowerCase().equals("cities")) {
                result = new EntityRepository(City.class, citiesRepository);
                repositories.put("cities", result);

            } else if (catalog.toLowerCase().equals("units")) {
                result = new EntityRepository(Unit.class, unitsRepository);
                repositories.put("units", result);
            }
        }
        return result;
    }

    private final CitiesRepository citiesRepository;

    private final UnitsRepository unitsRepository;

    @Autowired
    public CatalogsController(CitiesRepository citiesRepository, UnitsRepository unitsRepository) {
        this.citiesRepository = citiesRepository;
        this.unitsRepository = unitsRepository;
    }

    @PostConstruct
    public void init() {
        // cities
        citiesRepository.save(new City("Липецк"));
        citiesRepository.save(new City("Тамбов"));
        citiesRepository.save(new City("Воронеж", "Столица Черноземья"));
        citiesRepository.save(new City("Москва"));

        //units measure
        unitsRepository.save(new Unit("шт"));
        unitsRepository.save(new Unit("кг"));
        unitsRepository.save(new Unit("м2"));
        unitsRepository.save(new Unit("м3"));
    }

    @GetMapping("/{catalog}")
    public ResponseEntity<?> items(@PathVariable("catalog") String catalog) {
        EntityRepository entityRepository = getEntityRepository(catalog);
        if (entityRepository != null) {
            return new ResponseEntity<Object>(
                    entityRepository.getRepository().findAll(),
                    HttpStatus.OK
            );
        }
        return null;
    }

    @DeleteMapping("/{catalog}/{id}")
    public boolean delete(@PathVariable("catalog") String catalog, @PathVariable("id") Long id) {
        EntityRepository entityRepository = getEntityRepository(catalog);
        if (entityRepository != null) {
            entityRepository.getRepository().deleteById(id);
        }
        return true;
    }

    @RequestMapping(path = "/{catalog}", method = {RequestMethod.PUT, RequestMethod.POST})
    public boolean edit(@PathVariable("catalog") String catalog, @RequestBody String element) {

        EntityRepository entityRepository = getEntityRepository(catalog);
        if (entityRepository != null) {
            Catalog object;
            ObjectMapper mapper = new ObjectMapper();
            try {
                object = Catalog.class.cast(mapper.readValue(element, entityRepository.getEntity()));
                entityRepository.getRepository().save(object);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return true;
    }

    static class EntityRepository {
        private Class entity;
        private CrudRepository repository;

        EntityRepository(Class entity, CrudRepository repository) {
            this.entity = entity;
            this.repository = repository;
        }

        Class getEntity() {
            return entity;
        }

        CrudRepository getRepository() {
            return repository;
        }
    }
}
