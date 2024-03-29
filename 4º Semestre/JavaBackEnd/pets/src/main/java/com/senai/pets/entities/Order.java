package com.senai.pets.entities;

import java.time.LocalDateTime;

import com.senai.pets.entities.enums.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor@AllArgsConstructor
@Entity
@Table(name = "order_table")
public class Order {
    @Id
    private Long id;
    @Column()
    private Integer quantity;
    private LocalDateTime shipDtae;
    private OrderStatus status;
    private Boolean complete;
}