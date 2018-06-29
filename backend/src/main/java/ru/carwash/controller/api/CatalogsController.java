package ru.carwash.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.carwash.db.repository.*;
import ru.carwash.entity.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author a.kakushin
 */
@RestController
@RequestMapping("/api/catalogs")
@CrossOrigin(origins="*")
public class CatalogsController {

    @Autowired
    private CitiesRepository citiesRepository;

    @Autowired
    private UnitsRepository unitsRepository;

    @Autowired
    private NomenclaturesRepository nomenclaturesRepository;

    @Autowired
    private GroupsContractorRepository groupsContractorRepository;

    @Autowired
    private ContractorsRepository contractorsRepository;

    @Autowired
    private StagesRepository stagesRepository;

    @Autowired
    private SectionsRepository sectionsRepository;

    @Autowired
    private BuildingsRepository buildingsRepository;

    @Autowired
    private TargetsRepository targetsRepository;

    @Autowired
    private KitsRepository kitsRepository;

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

            } else if (catalog.toLowerCase().equals("nomenclatures")) {
                result = new EntityRepository(Nomenclature.class, nomenclaturesRepository);
                repositories.put("nomenclatures", result);

            } else if (catalog.toLowerCase().equals("services")) {
                result = new EntityRepository(Nomenclature.class, nomenclaturesRepository);
                repositories.put("nomenclatures", result);

            } else if (catalog.toLowerCase().equals("materials")) {
                result = new EntityRepository(Nomenclature.class, nomenclaturesRepository);
                repositories.put("nomenclatures", result);

            } else if (catalog.toLowerCase().equals("mechanisms")) {
                result = new EntityRepository(Nomenclature.class, nomenclaturesRepository);
                repositories.put("nomenclatures", result);

            } else if (catalog.toLowerCase().equals("groupscontractor")) {
                result = new EntityRepository(GroupContractor.class, groupsContractorRepository);
                repositories.put("groupscontractor", result);

            } else if (catalog.toLowerCase().equals("contractors")) {
                result = new EntityRepository(Contractor.class, contractorsRepository);
                repositories.put("contractors", result);

            } else if (catalog.toLowerCase().equals("stages")) {
                result = new EntityRepository(Stage.class, stagesRepository);
                repositories.put("stages", result);

            } else if (catalog.toLowerCase().equals("sections")) {
                result = new EntityRepository(Section.class, sectionsRepository);
                repositories.put("sections", result);

            } else if (catalog.toLowerCase().equals("buildings")) {
                result = new EntityRepository(Building.class, buildingsRepository);
                repositories.put("buildings", result);

            } else if (catalog.toLowerCase().equals("targets")) {
                result = new EntityRepository(Target.class, targetsRepository);
                repositories.put("targets", result);

            } else if (catalog.toLowerCase().equals("kits")) {
                result = new EntityRepository(Kit.class, kitsRepository);
                repositories.put("kits", result);
            }
        }
        return result;
    }

    @JsonView(View.List.class)
    @GetMapping("/{catalog}")
    public ResponseEntity<?> items(@PathVariable("catalog") String catalog) {
        EntityRepository entityRepository = getEntityRepository(catalog);
        if (entityRepository != null) {

            Object body = null;

            if (entityRepository.getRepository() == nomenclaturesRepository) {
                if (catalog.equals("nomenclatures")) {
                    body = entityRepository.getRepository().findAll();
                } else {
                    if (catalog.equals("services")) {
                        body = nomenclaturesRepository.findAllByType(Nomenclature.Type.SERVICE);

                    } else if (catalog.equals("materials")) {
                        body = nomenclaturesRepository.findAllByType(Nomenclature.Type.MATERIAL);

                    } else if (catalog.equals("mechanisms")) {
                        body = nomenclaturesRepository.findAllByType(Nomenclature.Type.MECHANISM);
                    }
                }
            } else {
                body = entityRepository.getRepository().findAll();
            }

            return new ResponseEntity<>(body, HttpStatus.OK);
        }
        return null;
    }

    @JsonView(View.Element.class)
    @GetMapping("/{catalog}/{id}")
    public ResponseEntity<?> item(@PathVariable("catalog") String catalog, @PathVariable("id") Long id) {
        EntityRepository entityRepository = getEntityRepository(catalog);
        if (entityRepository != null) {
            Object body = null;
            if (entityRepository.getRepository() == nomenclaturesRepository) {
                if (catalog.equals("nomenclatures")) {
                    body = entityRepository.getRepository().findById(id);
                } else {
                    if (catalog.equals("services") || catalog.equals("materials") || catalog.equals("mechanisms")) {
                        body = nomenclaturesRepository.findById(id);
                    }
                }
            } else {
                body = entityRepository.getRepository().findById(id);
            }
            return new ResponseEntity<>(body, HttpStatus.OK);
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
    public ResponseEntity<?> edit(@PathVariable("catalog") String catalog, @RequestBody String element) {

        Catalog object = null;

        EntityRepository entityRepository = getEntityRepository(catalog);
        if (entityRepository != null) {
            ObjectMapper mapper = new ObjectMapper();
            try {
                object = Catalog.class.cast(mapper.readValue(element, entityRepository.getEntity()));
                entityRepository.getRepository().save(object);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return new ResponseEntity<>(object, HttpStatus.OK);
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
