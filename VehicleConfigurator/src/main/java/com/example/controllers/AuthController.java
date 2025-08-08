package com.example.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.dto.AuthRequest;

import java.util.Map;

@RestController
@RequestMapping("/api/auth") // Base path
@CrossOrigin
public class AuthController {

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody AuthRequest request) {
        // Dummy check (replace with actual DB call or service)
        if ("admin@example.com".equals(request.getEmail()) && "password123".equals(request.getPassword())) {
            return ResponseEntity.ok(Map.of(
                "email", request.getEmail(),
                "name", "Admin User"
            ));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
