package ru.carwash.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * @author a.kakushin
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="*")
public class AuthenticationController {

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}
