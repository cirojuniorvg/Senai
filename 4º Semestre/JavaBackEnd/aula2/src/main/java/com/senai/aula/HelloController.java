package com.senai.aula;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

//http://localhost:8080/hello?name=V

@RestController
@RequestMapping("/hello")

public class HelloController {

    @GetMapping
    public String hello(@RequestParam String name) {
        return "Hello " + name;
        }

//http://localhost:8080/hello/temp?celcius=0
    @GetMapping("/temp")
    public String fahrenheit(@RequestParam float celcius) {
        float fahrenheit = celcius * 9/5 + 32;
        return  "A temperatura em graus Fahrenheit é: " + fahrenheit;
        }
    }