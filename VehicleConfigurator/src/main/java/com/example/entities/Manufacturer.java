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
@Table(name = "mfg_master")
public class Manufacturer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mfg_id")
    private int mfgId;
    
    @Column(nullable = false, unique = true)
    private String mfgName;
    
    @OneToMany(mappedBy = "manufacturer")
    @JsonBackReference
    private List<Model> models;

    public int getMfgId() {
		return mfgId;
	}

	public void setMfgId(int mfgId) {
		this.mfgId = mfgId;
	}

	public String getMfgName() {
		return mfgName;
	}

	public void setMfgName(String mfgName) {
		this.mfgName = mfgName;
	}

}
