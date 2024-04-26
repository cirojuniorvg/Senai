package com.senai.pets.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.pets.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFirstNameAndLastName(String firstName, String lastName);
}
