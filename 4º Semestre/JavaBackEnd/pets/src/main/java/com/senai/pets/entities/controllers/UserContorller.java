package com.senai.pets.entities.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.pets.entities.User;
import com.senai.pets.repositories.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserContorller {
    @Autowired
    private UserRepository repository;

    @GetMapping
    public List<User> list(){
        return repository.findAll();
        
    }
}
