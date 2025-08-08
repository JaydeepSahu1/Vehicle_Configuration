package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Component;

@Repository
public interface ComponentRepository extends JpaRepository<Component, Integer> {
    Component findByCompName(String compName);
}
