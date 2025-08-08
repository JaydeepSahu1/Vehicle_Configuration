package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Manufacturer;
import com.example.services.ManufacturerService;

@RestController
@RequestMapping("/manufacturers")
public class ManufacturerController {
    @Autowired
    private ManufacturerService manufacturerService;

    @GetMapping
    public List<Manufacturer> getAllManufacturers() {
        return manufacturerService.getAllManufacturers();
    }
    
    @GetMapping("/id/{mfgId}")
    public Manufacturer getManufacturerById(@PathVariable int mfgId) {
        return manufacturerService.getManufacturerById(mfgId);
    }
    
    @GetMapping("/by-segment/{segId}")
    public List<Manufacturer> getManufacturersBySegment(@PathVariable int segId) {
        return manufacturerService.getManufacturersBySegmentId(segId);
    }

    @GetMapping("/name/{mfgName}")
    public Manufacturer getManufacturerByName(@PathVariable String mfgName) {
        return manufacturerService.getManufacturerByName(mfgName);
    }

    @PostMapping
    public Manufacturer addManufacturer(@RequestBody Manufacturer manufacturer) {
        return manufacturerService.createManufacturer(manufacturer);
    }
}
