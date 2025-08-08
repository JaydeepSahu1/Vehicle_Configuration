package com.example.controllers;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.AuthRequest;
import com.example.entities.User;
import com.example.repositories.UserRepository;
import com.example.token.JwtUtil;
@RestController
@RequestMapping("/api/user")
public class UserController 
{
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User request)
	{
	    if (repository.findByEmail(request.getEmail()).isPresent()) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already registered");
	    }

	    User user = new User();
	    user.setCompany_name(request.getCompany_name());
	    user.setAdd1(request.getAdd1());
	    user.setAdd2(request.getAdd2());
	    user.setCity(request.getCity());
	    user.setState(request.getState());
	    user.setPin(request.getPin());
	    user.setTel(request.getTel());
	    user.setFax(request.getFax());
	    user.setAuth_name(request.getAuth_name());
	    user.setDesignation(request.getDesignation());
	    user.setAuth_tel(request.getAuth_tel());
	    user.setCell(request.getCell());
	    user.setCompany_st_no(request.getCompany_st_no());
	    user.setCompany_vat_no(request.getCompany_vat_no());
	    user.setTax_pan(request.getTax_pan());
	    user.setHolding_type(request.getHolding_type());
	    user.setEmail(request.getEmail());
	    user.setPassword(passwordEncoder.encode(request.getPassword())); 

	    return ResponseEntity.ok(repository.save(user));
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
	    Optional<User> userOpt = repository.findByEmail(authRequest.getEmail());

	    if (userOpt.isPresent()) {
	        User user = userOpt.get();

	        if (passwordEncoder.matches(authRequest.getPassword(), user.getPassword())) {
	            String token = jwtUtil.generateToken(user.getEmail());
	            return ResponseEntity.ok(Map.of("token", token));
	        }
	    }

	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}

	 
}