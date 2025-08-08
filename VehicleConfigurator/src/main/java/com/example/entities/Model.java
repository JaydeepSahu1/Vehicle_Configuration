package com.example.entities;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "model_master")
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "model_id")
    private int modelId;

    @Column(name = "model_name")
    private String modelName;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "seg_id")
//    @JsonIgnore
//    private Segment segment;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "mfg_id")
//    @JsonIgnore
//    private Manufacturer manufacturer;
    
 // Manufacturer relation
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "mfg_id")
    private Manufacturer manufacturer;

    // Segment relation
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "seg_id")
    private Segment segment;

    // Default components linked to this model (transient, set in service)
    @OneToMany(mappedBy = "model", cascade = CascadeType.ALL)
    private List<VehicleDetail> defaultComponents;

    
    public Integer getMfgId() {
        return manufacturer != null ? manufacturer.getMfgId() : null;
    }

    public Integer getSegId() {
        return segment != null ? segment.getSegId() : null;
    }

    @Column(name = "min_qty")
    private int minQty;

    private BigDecimal price;

    @Column(name = "image_path")
    private String imagePath;

    // Getters and setters
    public int getModelId() {
        return modelId;
    }

    public void setModelId(int modelId) {
        this.modelId = modelId;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }


    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public Segment getSegment() {
        return segment;
    }

    public void setSegment(Segment segment) {
        this.segment = segment;
    }

    public int getMinQty() {
        return minQty;
    }

    public void setMinQty(int minQty) {
        this.minQty = minQty;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
    
    public List<VehicleDetail> getDefaultComponents() { return defaultComponents; }
    public void setDefaultComponents(List<VehicleDetail> defaultComponents) { this.defaultComponents = defaultComponents; }

}
