package com.senai.pets.dtos.user;

import com.senai.pets.entities.enums.UserStatus;

import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor @Data
public class UserOutput {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private UserStatus UserStatus;

}
