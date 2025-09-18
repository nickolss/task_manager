package com.nickolss.framework.adapter.web.controller;

import com.nickolss.framework.adapter.web.dto.StudentRequestDto;
import com.nickolss.framework.useCase.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Auth Controller", description = "Endpoints for user authentication")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Register a new user with name, email, and password")
    public ResponseEntity<Void> register(@RequestBody StudentRequestDto studentRequestDto){
        authService.register(studentRequestDto.name(), studentRequestDto.email(), studentRequestDto.password());

        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    @Operation(summary = "User login", description = "Authenticate a user with email and password")
    public ResponseEntity<Void> login(@RequestBody StudentRequestDto studentRequestDto){
        authService.login(studentRequestDto.email(), studentRequestDto.password());

        return ResponseEntity.ok().build();
    }

}
