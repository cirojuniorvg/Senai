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
import com.senai.pets.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserContorller {

    @Autowired
    private UserService service;

    @GetMapping
    public ResponseEntity<List<UserOutput>> list(){
        List<UserOutput> list = service.list();
        //return new ResponseEntity(list, HttpStatus.OK);
        return ResponseEntity.ok(list);
        
    }
    
    @PostMapping
    public ResponseEntity<UserOutput> create(@RequestBody UserInput user){
        UserOutput output = service.create(user);

       return new ResponseEntity(output, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserOutput> read(@PathVariable Long id){
        UserOutput user = service.read(id);
        if(user == null){
            return ResponseEntity.notFound().build();
        }
        //return new ResponseEntity(user, HttpStatus.OK);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/(id)")
    public ResponseEntity<UserOutput> update(
        @PathVariable Long id, @RequestBody UserInput user
        ){
       UserOutput output = service.update(id, user);
       if(output == null){
        return ResponseEntity.notFound().build();
       }
        //return new ResponseEntity(user, HttpStatus.OK);
        return ResponseEntity.ok(output);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        service.delete(id);
        //return new ResponseEntity(user, HttpStatus.CONTENT);
        return ResponseEntity.noContent().build();
    }
}

/* 
http://localhost:8080/swagger-ui/index.html
@PathVariable GET | PUT | DELETE
*/