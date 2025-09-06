package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.StudentRequestDto;
import com.nickolss.framework.useCase.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody StudentRequestDto studentRequestDto){
        authService.register(studentRequestDto.name(), studentRequestDto.email(), studentRequestDto.password());

        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody StudentRequestDto studentRequestDto){
        authService.login(studentRequestDto.email(), studentRequestDto.password());

        return ResponseEntity.ok().build();
    }

}
