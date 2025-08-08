package com.example.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.AlternateComponent;
import com.example.entities.VehicleDetail;
import com.example.repositories.AlternateComponentRepository;
import com.example.repositories.VehicleDetailRepository;

@Service
public class AlternateComponentService {

    @Autowired
    private AlternateComponentRepository altCompRepository;

    @Autowired
    private VehicleDetailRepository vehicleDetailRepository;

    // Fetch all alternate components
    public List<AlternateComponent> getAllAlternateComponents() {
        return altCompRepository.findAll();
    }

    // Fetch alternate components for a specific component ID
    public List<AlternateComponent> getAlternatesByComponentId(Integer compId) {
        return altCompRepository.findByBaseComponentCompId(compId);
    }
    
    public Map<Character, Map<Integer, List<AlternateComponent>>> getGroupedAlternatesByModel(Integer modelId) {
        // Get all components of the model which are configurable (Y)
        List<VehicleDetail> configurableComponents = vehicleDetailRepository
                .findByModelModelIdAndIsConfigurable(modelId, "Y");

        Map<Character, Map<Integer, List<AlternateComponent>>> result = new HashMap<>();

        for (VehicleDetail detail : configurableComponents) {
            Character compType = detail.getCompType(); // 'S', 'I', 'E'
            Integer compId = detail.getComponent().getCompId();

            List<AlternateComponent> alternates = altCompRepository.findByBaseComponentCompId(compId);

            result.computeIfAbsent(compType, k -> new HashMap<>())
                  .put(compId, alternates);
        }

        return result;
    }

    // Save a new alternate component
    public AlternateComponent addAlternateComponent(AlternateComponent altComp) {
        return altCompRepository.save(altComp);
    }
}
