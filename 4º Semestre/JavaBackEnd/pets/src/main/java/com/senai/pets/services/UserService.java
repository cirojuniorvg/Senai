package com.senai.pets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.pets.dtos.user.UserInput;
import com.senai.pets.dtos.user.UserOutput;
import com.senai.pets.entities.User;
import com.senai.pets.repositories.UserRepository;



@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public UserOutput create(UserInput input){
        User user = convertInputToUser(input);
        user = repository.save(user);
        return convertUserToOutput(user);
    }

    public List<UserOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(u -> convertUserToOutput(u))
        .toList();
    }

    public UserOutput read(Long id){
        User user = repository.findById(id).orElse(null);
        return convertUserToOutput(user);

    }

    public UserOutput update(Long id, UserInput input){
        if(repository.existsById(id)){
            User user = convertInputToUser(input);
            user.setId(id);
            user = repository.save(user);
            return convertUserToOutput(user);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }


    private UserOutput convertUserToOutput(User user){
        if(user == null){
            return null;
        }
        UserOutput output = new UserOutput(
            user.getId(), 
            user.getUsername(), 
            user.getFirstName(), 
            user.getLastName(), 
            user.getEmail(), 
            user.getUserStatus()
            );
            return output;
    }

    private User convertInputToUser(UserInput input){
        User user = new User();
        user.setEmail(input.getEmail());
        user.setUsername(input.getUsername());
        user.setPassword(input.getPassword());
        user.setFirstName(input.getFirstName());
        user.setLastName(input.getLastName());
        user.setPhone(input.getPhone());
        return user;
    }
}
