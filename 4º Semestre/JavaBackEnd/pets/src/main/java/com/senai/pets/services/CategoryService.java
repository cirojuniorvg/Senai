package com.senai.pets.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.pets.dtos.categories.CategoryInput;
import com.senai.pets.dtos.categories.CategoryOutput;
import com.senai.pets.entities.Category;
import com.senai.pets.repositories.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repository;

    public CategoryOutput create(CategoryInput input) {
        Category category = convertInputToCategory(input);
        category = repository.save(category);
        return convertCategoryToOutput(category);
    }

    public List<CategoryOutput> list() {
        return repository
                .findAll()
                .stream()
                .map(item -> convertCategoryToOutput(item))
                .toList();
    }


    public CategoryOutput read(Long id) {
        Category category = repository.findById(id).orElse(null);
        return convertCategoryToOutput(category);
    }

    public CategoryOutput update(Long id, CategoryInput input) {
        if (repository.existsById(id)) {
            Category category = convertInputToCategory(input);
            category.setId(id);
            category = repository.save(category);
            return convertCategoryToOutput(category);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private CategoryOutput convertCategoryToOutput(Category category) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(category, CategoryOutput.class);
    }

    private Category convertInputToCategory(CategoryInput input) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(input, Category.class);
    }
}
