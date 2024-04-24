package com.senai.pets.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.pets.dtos.orders.OrderInput;
import com.senai.pets.dtos.orders.OrderOutput;
import com.senai.pets.entities.Order;
import com.senai.pets.repositories.OrderRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository repository;

    public OrderOutput create(OrderInput input) {
        Order order = convertInputToOrder(input);
        order = repository.save(order);
        return convertOrderToOutput(order);
    }

    public List<OrderOutput> list() {
        return repository
                .findAll()
                .stream()
                .map(item -> convertOrderToOutput(item))
                .toList();
    }


    public OrderOutput read(Long id) {
        Order order = repository.findById(id).orElse(null);
        return convertOrderToOutput(order);
    }

    public OrderOutput update(Long id, OrderInput input) {
        if (repository.existsById(id)) {
            Order order = convertInputToOrder(input);
            order.setId(id);
            order = repository.save(order);
            return convertOrderToOutput(order);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private OrderOutput convertOrderToOutput(Order order) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(order, OrderOutput.class);
    }

    private Order convertInputToOrder(OrderInput input) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(input, Order.class);
    }
}
