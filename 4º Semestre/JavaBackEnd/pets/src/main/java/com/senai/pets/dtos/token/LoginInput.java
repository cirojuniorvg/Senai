package com.senai.pets.dtos.token;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class LoginInput {
    @NotBlank @Email
    private String email;
    @NotBlank
    private String senha;
}
