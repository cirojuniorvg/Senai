package com.senai.pets.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.pets.entities.Pet;
import java.util.List;
import com.senai.pets.entities.enums.Status;


public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByStatus(Status status);
    
}
