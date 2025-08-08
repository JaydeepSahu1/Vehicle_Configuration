package com.example.services;

import com.example.entities.VehicleDetail;
import com.example.repositories.VehicleDetailRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class VehicleDetailService {

    private final VehicleDetailRepository repository;

    public VehicleDetailService(VehicleDetailRepository repository) {
        this.repository = repository;
    }

    public List<VehicleDetail> getAllVehicleDetails() {
        return repository.findAll();
    }
    
    public VehicleDetail getById(int id) {
        return repository.findById(id).orElse(null);
    }
    
    public List<VehicleDetail> getByModelId(int modelId) {
        return repository.findByModel_ModelId(modelId);
    }

    public List<VehicleDetail> getByIsConfigurable(char isConfigurable) {
        return repository.findByIsConfigurable(isConfigurable);
    }
    public List<VehicleDetail> getDefaultConfigurationByModelId(int modelId) {
        return repository.findByModel_ModelIdAndCompType(modelId, 'C');
    }
    
    public List<VehicleDetail> getDefaultConfiguration(int modelId) {
        return repository.findByModel_ModelId(modelId);
    }
    
    public List<VehicleDetail> getByModelIdAndIsConfigurable(int modelId, char isConfigurable) {
        return repository.findByModel_ModelIdAndIsConfigurable(modelId, isConfigurable);
    }
    
    
    
    public VehicleDetail save(VehicleDetail vehicleDetail) {
        return repository.save(vehicleDetail);
    }

    public void deleteById(int id) {
        repository.deleteById(id);
    }
}
