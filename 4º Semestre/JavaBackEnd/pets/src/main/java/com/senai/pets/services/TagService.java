package com.senai.pets.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.pets.dtos.tags.TagInput;
import com.senai.pets.dtos.tags.TagOutput;
import com.senai.pets.entities.Tag;
import com.senai.pets.repositories.TagRepository;

@Service
public class TagService {
    @Autowired
    private TagRepository repository;

    public TagOutput create(TagInput input) {
        Tag tag = convertInputToTag(input);
        tag = repository.save(tag);
        return convertTagToOutput(tag);
    }

    public List<TagOutput> list() {
        return repository
                .findAll()
                .stream()
                .map(item -> convertTagToOutput(item))
                .toList();
    }


    public TagOutput read(Long id) {
        Tag tag = repository.findById(id).orElse(null);
        return convertTagToOutput(tag);
    }

    public TagOutput update(Long id, TagInput input) {
        if (repository.existsById(id)) {
            Tag tag = convertInputToTag(input);
            tag.setId(id);
            tag = repository.save(tag);
            return convertTagToOutput(tag);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private TagOutput convertTagToOutput(Tag tag) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(tag, TagOutput.class);
    }

    private Tag convertInputToTag(TagInput input) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(input, Tag.class);
    }
}
