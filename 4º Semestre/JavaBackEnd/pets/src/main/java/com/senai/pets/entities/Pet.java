package com.senai.pets.entities;

import java.util.List;

import com.senai.pets.entities.enums.Status;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class Pet {
    @Id
    private Long id;
    @Column(length = 255)
    private String name;
    private Status status;

    @ManyToOne
    private Administrador creator;
    @ManyToOne
    @JoinColumn(name = "order_fk")
    private Order order;
    @ManyToOne
    private Category category;

    private List<Tag> tags;
}