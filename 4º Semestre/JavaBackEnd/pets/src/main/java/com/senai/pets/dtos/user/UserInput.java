package com.senai.pets.dtos.user;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class UserInput {

    private String username;

    @NotNull
    private String firstName;

    private String lastName;

    @NotNull @Email
    private String email;

    @NotEmpty @Size(min=6)
    private String password;

    private String phone;

}
