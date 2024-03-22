package com.senai.aula;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

//http://localhost:8080/hello?name=V

@RestController
@RequestMapping("/hello")

public class HelloWorld {

    @GetMapping("")
    public String helloWorld(@RequestParam Character name) {
        name = Character.toUpperCase(name);
        if (name == 'M') {
            return "Bom dia";
        } else if (name == 'V') {
            return "Boa Tarde";
        } else if (name == 'N') {
            return "Boa Noite";
        } else {
            return "Valor inválido, digite M, N ou V";
        }
    }
}
