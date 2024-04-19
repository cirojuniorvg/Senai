package com.senai.pets.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.pets.dtos.user.UserInput;
import com.senai.pets.dtos.user.UserOutput;
import com.senai.pets.entities.User;
import com.senai.pets.repositories.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserContorller {
    @Autowired
    private UserRepository repository;

    @GetMapping
    public ResponseEntity<List<User>> list(){
        List<User> list = repository.findAll();
        //return new ResponseEntity(list, HttpStatus.OK);
        return ResponseEntity.ok(list);
        
    }
    
    @PostMapping
    public ResponseEntity<UserOutput> create(@RequestBody UserInput user){
        User userToSave = new User();
        userToSave.setEmail(user.getEmail());
        userToSave.setUsername(user.getUsername());
        userToSave.setPassword(user.getPassword());
        userToSave.setFirstName(user.getFirstName());
        userToSave.setLastName(user.getLastName());
        userToSave.setPhone(user.getPhone());
    
       User userSaved = repository.save(userToSave);

       UserOutput output = new UserOutput(
        userSaved.getId(), 
        userSaved.getUsername(), 
        userSaved.getFirstName(), 
        userSaved.getLastName(), 
        userSaved.getEmail(), 
        userSaved.getUserStatus());

       return new ResponseEntity(output, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> read(@PathVariable Long id){
        User user = repository.findById(id).get();
        //return new ResponseEntity(user, HttpStatus.OK);
        return ResponseEntity.ok(user);
    }

    @PutMapping
    public ResponseEntity<User> update(@RequestBody User user){
        User userUpdated = repository.save(user);
        //return new ResponseEntity(user, HttpStatus.OK);
        return ResponseEntity.ok(userUpdated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        repository.deleteById(id);
        //return new ResponseEntity(user, HttpStatus.CONTENT);
        return ResponseEntity.noContent().build();
    }
}

/* 
http://localhost:8080/swagger-ui/index.html
@PathVariable GET | PUT | DELETE
*/