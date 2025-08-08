package com.example.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.entities.User;
import com.example.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService 
{
	@Autowired
	private UserRepository repository;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	}
	
	@Override
    public UserDetails loadUserByUsername(String email) {
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .authorities("USER")
                .build();
    }

}
