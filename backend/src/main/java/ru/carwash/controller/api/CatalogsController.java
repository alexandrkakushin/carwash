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

import javax.annotation.PostConstruct;
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

    @PostConstruct
    public void init() {
        // cities
        City cityLipetsk = citiesRepository.save(new City("Липецк"));
        City cityTambov = citiesRepository.save(new City("Тамбов"));
        City cityVrn = citiesRepository.save(new City("Воронеж"));
        City cityMsk = citiesRepository.save(new City("Москва"));

        // groups contractor
        GroupContractor group1 = groupsContractorRepository.save(new GroupContractor("Подрядчики"));
        GroupContractor group2 = groupsContractorRepository.save(new GroupContractor("Поставщики"));
        GroupContractor group3 = groupsContractorRepository.save(new GroupContractor("Спец. техника"));
        GroupContractor group4 = groupsContractorRepository.save(new GroupContractor("Людские ресурсы"));
        GroupContractor group5 = groupsContractorRepository.save(new GroupContractor("Проектирование"));

        // contractors
//        contractorsRepository.save(new Contractor("Песок Черноземья", cityVrn, group1));

        // nomenclatures
//        Nomenclature material = nomenclaturesRepository.save(new Nomenclature("100500", "Щебень гранитный 20/40", Nomenclature.Type.MATERIAL, unitm2, 250));
//        nomenclaturesRepository.save(new Nomenclature("100501", "Конус полимерпесчаный", Nomenclature.Type.MATERIAL, unitm2, 150));
//        nomenclaturesRepository.save(new Nomenclature("100502", "Битумно-каучуковая мастика", Nomenclature.Type.MATERIAL, unitm3, 400));
//        nomenclaturesRepository.save(new Nomenclature("100503", "Доска обрезная 25х150х6000", Nomenclature.Type.MATERIAL, unitm3, 550));
//
//        Nomenclature service = nomenclaturesRepository.save(new Nomenclature("200500", "Устройство основания песчаного", Nomenclature.Type.SERVICE, unitm2, 250));
//        nomenclaturesRepository.save(new Nomenclature("200501", "Затирка поверхности бетона УШМ с упрочнением топпингом", Nomenclature.Type.SERVICE, unitm2, 150));
//        nomenclaturesRepository.save(new Nomenclature("200502", "Монтаж профлиста на вспомогательное помещение для флотатора", Nomenclature.Type.SERVICE, unitm2, 400));
//
//        Nomenclature mechanism = nomenclaturesRepository.save(new Nomenclature("300500", "Монтаж сборных железобетонных плит", Nomenclature.Type.MECHANISM, unitm2, 250));
//        nomenclaturesRepository.save(new Nomenclature("300501", "Монтаж элементов железобетонных колодцев 1,5м", Nomenclature.Type.MECHANISM, unitm2, 150));
//        nomenclaturesRepository.save(new Nomenclature("300502", "Монтаж профнастила Н75-750-0,8", Nomenclature.Type.MECHANISM, unitm2, 400));
//
//        Stage stage1 = stagesRepository.save(new Stage("Стадия №1", material, service, mechanism));
//        Stage stage2 = stagesRepository.save(new Stage("Стадия №2"));
//        Stage stage3 = stagesRepository.save(new Stage("Стадия №3"));
//        Stage stage4 = stagesRepository.save(new Stage("Стадия №4"));
//        Stage stage5 = stagesRepository.save(new Stage("Стадия №5"));
//        Stage stage6 = stagesRepository.save(new Stage("Стадия №6"));
//        Stage stage7 = stagesRepository.save(new Stage("Стадия №7"));
//        Stage stage8 = stagesRepository.save(new Stage("Стадия №8"));
//        Stage stage9 = stagesRepository.save(new Stage("Стадия №9"));
//        Stage stage10 = stagesRepository.save(new Stage("Стадия №10"));
//
//        Section section1 = new Section("Секция 1");
//        section1.addStage(stage1);
//        section1.addStage(stage2);
//        section1.addStage(stage3);
//        sectionsRepository.save(section1);
//
//        Section section2 = new Section("Секция 2");
//        section2.addStage(stage1);
//        section2.addStage(stage2);
//        section2.addStage(stage3);
//        sectionsRepository.save(section2);
//
//        Building building1 = new Building("Тип сооружения 1");
//        building1.addSection(section1);
//        building1.addSection(section2);
//        buildingsRepository.save(building1);
//
//        Building building2 = new Building("Тип сооружения 2");
//        building2.addSection(section2);
//        buildingsRepository.save(building2);
//
//        Target target1 = new Target("Автомойка на 3 бокса", "", building1, cityVrn);
//        targetsRepository.save(target1);
    }

    @JsonView(View.Summary.class)
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
