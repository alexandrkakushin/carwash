package ru.carwash.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.carwash.db.repository.NomenclaturesRepository;
import ru.carwash.db.repository.PricesRepository;
import ru.carwash.entity.Nomenclature;
import ru.carwash.entity.Price;
import ru.carwash.entity.View;

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

    @GetMapping("/nomenclature/{idNomenclature}")
    @JsonView(View.List.class)
    public ResponseEntity<?> getPrices(@PathVariable("idNomenclature") Long id) {
        List prices = new ArrayList<>();
        Optional<Nomenclature> nomenclature = nomenclaturesRepository.findById(id);
        if (nomenclature.isPresent()) {
            prices = (List) pricesRepository.findByNomenclature(nomenclature.get());
        }
        return new ResponseEntity<>(prices, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @JsonView(View.Element.class)
    public ResponseEntity<?> item(@PathVariable("id") Long id) {
        Optional<Price> priceOptional = pricesRepository.findById(id);
        return new ResponseEntity<>(priceOptional.orElse(new Price()), HttpStatus.OK);
    }

    @RequestMapping(method = {RequestMethod.PUT, RequestMethod.POST})
    public ResponseEntity<?> editPrice(@RequestBody Price price) {
        pricesRepository.save(price);
        return new ResponseEntity<>(price, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id) {
       pricesRepository.deleteById(id);
       return true;
    }
}
