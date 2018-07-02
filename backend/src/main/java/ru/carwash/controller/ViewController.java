package ru.carwash.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author a.kakushin
 */
@Controller
public class ViewController {

    @RequestMapping("/carwash/**")
    public String index() {
        return "forward:/";
    }
}
