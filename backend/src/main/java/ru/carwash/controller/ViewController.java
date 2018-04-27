package ru.carwash.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping("/carwash/**")
    public String index() {
        return "forward:/";
    }
}
