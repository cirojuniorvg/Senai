package com.senai.pets.controllers;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.pets.dtos.token.LoginInput;
import com.senai.pets.services.TokenService;


@RestController
@RequestMapping("/login")
public class LoginCotroller {
    @Autowired
    private TokenService service;

    @Autowired
    private AuthenticationManager manager;

    @PostMapping
    public String login(@RequestBody LoginInput input){
        var user = new UsernamePasswordAuthenticationToken(
            input.getEmail(), input.getSenha()
            );
            var auth = manager.authenticate(user);
            var token = service.createToken((UserDetails) auth.getPrincipal());
            return token;
    }
}
