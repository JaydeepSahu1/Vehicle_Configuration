package com.example.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "vehicle_detail")
public class VehicleDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "config_id")
    private int configId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "model_id", nullable = false)
    @JsonIgnore // Prevent cyclic reference when serializing
    private Model model;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "comp_id", referencedColumnName = "comp_id")
    private Component component;

    @Column(name = "comp_type", nullable = false)
    private char compType;

    @Column(name = "is_configurable", nullable = false)
    private char isConfigurable;

    // Constructors
    public VehicleDetail() {}

    // Getters and Setters
    public int getConfigId() {
        return configId;
    }

    public void setConfigId(int configId) {
        this.configId = configId;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public Component getComponent() {
        return component;
    }

    public void setComponent(Component component) {
        this.component = component;
    }

    public char getCompType() {
        return compType;
    }

    public void setCompType(char compType) {
        this.compType = compType;
    }

    public char getIsConfigurable() {
        return isConfigurable;
    }

    public void setIsConfigurable(char isConfigurable) {
        this.isConfigurable = isConfigurable;
    }
}
