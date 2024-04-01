package com.senai.pets.entities;

import com.senai.pets.entities.enums.Office;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class Administrador {
    @Id
    private Long id;
    private Boolean isAdmin;
    @Enumerated(EnumType.STRING)
    private Office office;
}