package com.example.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "segment_master")
public class Segment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seg_id")
    private int segId;

    @Column(name = "seg_name", nullable = false, unique = true)
    private String segName;

    @Column(name = "min_quantity", nullable = false)
    private int minQuantity;
    
    @OneToMany(mappedBy = "segment")
    @JsonBackReference
    private List<Model> models;

    public int getSegId() {
        return segId;
    }

    public void setSegId(int segId) {
        this.segId = segId;
    }

    public String getSegName() {
        return segName;
    }

    public void setSegName(String segName) {
        this.segName = segName;
    }

    public int getMinQuantity() {
        return minQuantity;
    }

    public void setMinQuantity(int minQuantity) {
        this.minQuantity = minQuantity;
    }
}
