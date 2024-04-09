package com.senai.pets.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.pets.entities.Administrador;

public interface AdministradorRepository extends JpaRepository<Administrador, Long> {
    
}
