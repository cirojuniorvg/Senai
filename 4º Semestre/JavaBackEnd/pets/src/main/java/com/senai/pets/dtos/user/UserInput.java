package com.senai.pets.dtos.user;


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class UserInput {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;

}
