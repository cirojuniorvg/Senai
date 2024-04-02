package com.senai.pets.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class Tag {
    @Id
    private Long id;
    private String name;

    @ManyToMany(mappedBy = "tags")
    private List<Pet> pets;
}