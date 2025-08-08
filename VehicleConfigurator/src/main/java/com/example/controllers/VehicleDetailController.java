package com.example.controllers;

import com.example.entities.VehicleDetail;
import com.example.services.VehicleDetailService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/vehicle_detail")
public class VehicleDetailController {

    private final VehicleDetailService service;

    public VehicleDetailController(VehicleDetailService service) {
        this.service = service;
    }

    @GetMapping
    public List<VehicleDetail> getAll() {
        return service.getAllVehicleDetails();
    }

    @GetMapping("/configurable/{flag}")
    public List<VehicleDetail> getByIsConfigurable(@PathVariable char flag) {
        return service.getByIsConfigurable(flag);
    }
    
    @GetMapping("/default/{modelId}")
    public ResponseEntity<List<VehicleDetail>> getDefaultConfiguration(@PathVariable int modelId) {
        List<VehicleDetail> config = service.getDefaultConfiguration(modelId);
        return ResponseEntity.ok(config);
    }
    

    @GetMapping("/model/{modelId}")
    public List<VehicleDetail> getByModelId(@PathVariable int modelId) {
        return service.getByModelId(modelId);
    }

    @GetMapping("/{id}")
    public VehicleDetail getById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public VehicleDetail create(@RequestBody VehicleDetail vehicleDetail) {
        return service.save(vehicleDetail);
    }

    @PutMapping("/{id}")
    public VehicleDetail update(@PathVariable int id, @RequestBody VehicleDetail vehicleDetail) {
        vehicleDetail.setConfigId(id);
        return service.save(vehicleDetail);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deleteById(id);
    }
}
