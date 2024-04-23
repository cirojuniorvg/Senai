package com.senai.pets.dtos.pets;

import com.senai.pets.entities.enums.Status;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class PetOutput {

    private Long id;
    private String name;
    private Status status;
}
