package com.example.repositories;

import com.example.entities.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    // String is the type of the primary key (email)
	Optional<User> findByEmail(String email);
}
