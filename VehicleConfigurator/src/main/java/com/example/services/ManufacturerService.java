package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Manufacturer;
import com.example.repositories.ManufacturerRepository;

@Service
public class ManufacturerService {
    @Autowired
    private ManufacturerRepository manufacturerRepository;

    public List<Manufacturer> getAllManufacturers() {
        return manufacturerRepository.findAll();
    }
    public Manufacturer getManufacturerById(int mfgId) {
        return manufacturerRepository.findById(mfgId).orElse(null);
    }

    public Manufacturer getManufacturerByName(String mfgName) {
        return manufacturerRepository.findByMfgName(mfgName);
    }

    public Manufacturer createManufacturer(Manufacturer manufacturer) {
        return manufacturerRepository.save(manufacturer);
    }
    
    public List<Manufacturer> getManufacturersBySegmentId(int segId) {
        return manufacturerRepository.findDistinctByModelsSegmentSegId(segId);
    }
    
}
