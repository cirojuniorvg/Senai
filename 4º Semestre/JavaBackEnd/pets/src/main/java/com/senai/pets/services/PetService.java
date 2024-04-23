package com.senai.pets.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.pets.dtos.pets.PetInput;
import com.senai.pets.dtos.pets.PetOutput;
import com.senai.pets.entities.Pet;
import com.senai.pets.repositories.PetRepository;

@Service
public class PetService {
    @Autowired
    private PetRepository repository;

    public PetOutput create(PetInput input) {
        Pet pet = convertInputToPet(input);
        pet = repository.save(pet);
        return convertPetToOutput(pet);
    }

    public List<PetOutput> list() {
        return repository
                .findAll()
                .stream()
                .map(item -> convertPetToOutput(item))
                .toList();
    }


    public PetOutput read(Long id) {
        Pet pet = repository.findById(id).orElse(null);
        return convertPetToOutput(pet);
    }

    public PetOutput update(Long id, PetInput input) {
        if (repository.existsById(id)) {
            Pet pet = convertInputToPet(input);
            pet.setId(id);
            pet = repository.save(pet);
            return convertPetToOutput(pet);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private PetOutput convertPetToOutput(Pet pet) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(pet, PetOutput.class);
    }

    private Pet convertInputToPet(PetInput input) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(input, Pet.class);
    }
}
