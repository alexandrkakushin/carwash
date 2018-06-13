package ru.carwash.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.carwash.module.Okei;

/**
 * @author a.kakushin
 */
@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins="*")
public class AdminController {

    @Autowired
    Okei okei;

    @PostMapping("/okei/fill")
    public ResponseEntity<?> fillOkei() {
        boolean body = okei.fill();
        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
