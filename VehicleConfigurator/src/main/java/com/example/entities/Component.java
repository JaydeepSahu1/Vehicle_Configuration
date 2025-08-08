package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "component_master")
public class Component {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comp_id") 
    private int compId;

    @Column(name = "comp_name")  
    private String compName;

    public Component() {}

    // Getters and Setters
    public int getCompId() {
        return compId;
    }

    public void setCompId(int compId) {
        this.compId = compId;
    }

    public String getCompName() {
        return compName;
    }

    public void setCompName(String compName) {
        this.compName = compName;
    }
}
