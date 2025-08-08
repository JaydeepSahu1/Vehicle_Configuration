package com.example.services;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.AlternateComponent;
import com.example.entities.Manufacturer;
import com.example.entities.Model;
import com.example.entities.Segment;
import com.example.entities.VehicleDetail;
import com.example.repositories.AlternateComponentRepository;
import com.example.repositories.ManufacturerRepository;
import com.example.repositories.ModelRepository;
import com.example.repositories.VehicleDetailRepository;

@Service
public class ModelService {

	@Autowired
    private  ModelRepository modelRepository;
    @Autowired
    private  VehicleDetailRepository vehicleDetailRepository;
    @Autowired
    private ManufacturerRepository manufacturerRepository;
    @Autowired
    private AlternateComponentRepository altCompRepository;
    @Autowired
    public ModelService(ModelRepository modelRepository,
                        VehicleDetailRepository vehicleDetailRepository) {
        this.modelRepository = modelRepository;
        this.vehicleDetailRepository = vehicleDetailRepository;
    }

    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }
    
    public BigDecimal getBasePriceByModelId(Integer modelId) {
        return modelRepository.findById(modelId)
                .map(Model::getPrice)
                .orElse(null); // or throw an exception if preferred
    }

    public Model createModel(Model model) {
        return modelRepository.save(model);
    }

    public List<Model> getModelsBySegment(Segment segment) {
        return modelRepository.findBySegment(segment);
    }

    public List<Model> getModelsByManufacturerAndSegment(Manufacturer manufacturer, Segment segment) {
        return modelRepository.findByManufacturerAndSegment(manufacturer, segment);
    }

    public Model getFullModelDetails(int modelId) {
        return modelRepository.findByModelId(modelId);
    }

    public Model getModelWithDefaultComponents(Integer modelId) {
        return modelRepository.findByModelId(modelId)
            .orElseThrow(() -> new RuntimeException("Model not found"));
    }
    
//    public List<VehicleDetail> getConfigurableComponentsByModelId(int modelId) {
//        return vehicleDetailRepository.findByModel_ModelIdAndIsConfigurableTrue(modelId);
//    }
    public List<VehicleDetail> getComponentsByModelId(int modelId) {
        return vehicleDetailRepository.findByModel_ModelId(modelId);
    }

    // Get only configurable components for a model
    public List<VehicleDetail> getConfigurableComponentsByModelId(int modelId) {
        return vehicleDetailRepository.findByModel_ModelIdAndIsConfigurable(modelId, 'Y');
    }
    
    // Get only core method
//    public Model getDefaultConfigWithCoreComponents(int modelId) {
//        Model model = modelRepository.findById(modelId).orElse(null);
//        if (model == null) return null;
//
//        List<String> excludedTypes = Arrays.asList("S", "I", "E");
//        List<VehicleDetail> coreComponents = vehicleDetailRepository.findByModel_ModelIdAndCompTypeNotIn(modelId, excludedTypes);
//
//        model.setDefaultComponents(coreComponents); // Filtered list
//        return model;
//    }
    
    public Map<Character, Map<Integer, List<AlternateComponent>>> getGroupedAlternatesByModel(int modelId) {
        List<VehicleDetail> configurableComponents = vehicleDetailRepository.findByModel_ModelIdAndIsConfigurable(modelId, 'Y');

        Map<Character, Map<Integer, List<AlternateComponent>>> result = new HashMap<>();

        for (VehicleDetail detail : configurableComponents) {
            Character compType = detail.getCompType();
            Integer compId = detail.getComponent().getCompId();

            List<AlternateComponent> alternates = altCompRepository.findByModelModelId(modelId).stream()
                .filter(a -> a.getBaseComponent().getCompId() == compId)
                .toList();

            result.computeIfAbsent(compType, k -> new HashMap<>())
                  .put(compId, alternates);
        }

        return result;
    }



}
