package com.senai.pets.entities;

import com.senai.pets.entities.enums.UserStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;;

@Data @NoArgsConstructor @AllArgsConstructor 
@Entity
public class User {
    @Id
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private String password;
    private String phone;
    private UserStatus UserStatus;

    @OneToOne(optional = true)
    private Address address;
}