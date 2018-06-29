package ru.carwash.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.carwash.db.repository.NomenclaturesRepository;
import ru.carwash.db.repository.PricesRepository;
import ru.carwash.entity.Nomenclature;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author a.kakushin
 */
@RestController
@RequestMapping("/api/prices")
@CrossOrigin(origins="*")
public class PricesController {

    @Autowired
    private PricesRepository pricesRepository;

    @Autowired
    private NomenclaturesRepository nomenclaturesRepository;

    @GetMapping("/{id}")
    public ResponseEntity<?> getPrices(@PathVariable("id") Long id) {
        List prices = new ArrayList<>();
        Optional<Nomenclature> nomenclature = nomenclaturesRepository.findById(id);
        if (nomenclature.isPresent()) {
            prices = (List) pricesRepository.findByNomenclature(nomenclature.get());
        }
        return new ResponseEntity<>(prices, HttpStatus.OK);
    }
}
