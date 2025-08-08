package com.example.controllers;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.entities.AlternateComponent;
import com.example.entities.Manufacturer;
import com.example.entities.Model;
import com.example.entities.Segment;
import com.example.entities.VehicleDetail;
import com.example.repositories.AlternateComponentRepository;
import com.example.services.ManufacturerService;
import com.example.services.ModelService;
import com.example.services.SegmentService;
import com.example.services.VehicleDetailService;

@RestController
@RequestMapping("/models")
public class ModelController {

    @Autowired
    private ModelService modelService;
    
    @Autowired
    private SegmentService segmentService;
    
    @Autowired
    private ManufacturerService manufacturerService;
    
    @Autowired
    private VehicleDetailService vehicleDetailService;
    
    
    @Autowired
    public ModelController(ModelService modelService) {
        this.modelService = modelService;
    }

    @GetMapping
    public List<Model> getAllModels() {
        return modelService.getAllModels();
    }

    @PostMapping
    public Model addModel(@RequestBody Model model) {
        return modelService.createModel(model);
    }
    @GetMapping("/by-segment/{segmentId}")
    public List<Model> getModelsBySegment(@PathVariable int segmentId) {
        Segment segment = segmentService.getSegmentById(segmentId);
        return modelService.getModelsBySegment(segment); 
    }
    
    @GetMapping("/by-segment/{segmentId}/manufacturer/{manufacturerId}")
    public List<Model> getModelsBySegmentAndManufacturer(@PathVariable int segmentId,
                                                        @PathVariable int manufacturerId) {
        Segment segment = segmentService.getSegmentById(segmentId);
        Manufacturer manufacturer = manufacturerService.getManufacturerById(manufacturerId);
        return modelService.getModelsByManufacturerAndSegment(manufacturer, segment);
    }
    
    //previous
    @GetMapping("/default/{modelId}")
    public ResponseEntity<Model> getModelWithDefaults(@PathVariable Integer modelId) {
        Model model = modelService.getModelWithDefaultComponents(modelId);
        return ResponseEntity.ok(model);
    }
    
    //new
//    @GetMapping("/default/{modelId}")
//    public ResponseEntity<?> getModelDefaultConfig(@PathVariable int modelId) {
//        Model model = modelService.getDefaultConfigWithCoreComponents(modelId);
//        if (model == null) return ResponseEntity.notFound().build();
//        return ResponseEntity.ok(model);
//    }
    
    @GetMapping("/configurable/{modelId}")
    public ResponseEntity<List<VehicleDetail>> getConfigurableComponents(@PathVariable int modelId) {
        List<VehicleDetail> components = vehicleDetailService.getByModelIdAndIsConfigurable(modelId, 'Y');
        return ResponseEntity.ok(components);
    }
    
    @GetMapping("/components/{modelId}")
    public ResponseEntity<List<VehicleDetail>> getAllComponents(@PathVariable int modelId) {
        List<VehicleDetail> components = modelService.getComponentsByModelId(modelId);
        return ResponseEntity.ok(components);
    }
    
    @GetMapping("/alternate-components/{modelId}")
    public ResponseEntity<Map<Character, Map<Integer, List<AlternateComponent>>>> getAlternateComponentsGrouped(
            @PathVariable int modelId) {
        Map<Character, Map<Integer, List<AlternateComponent>>> grouped = modelService.getGroupedAlternatesByModel(modelId);
        return ResponseEntity.ok(grouped);
    }
    
    @GetMapping("/price/{modelId}")
    public ResponseEntity<BigDecimal> getBasePrice(@PathVariable Integer modelId) {
        BigDecimal price = modelService.getBasePriceByModelId(modelId);
        if (price == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(price);
    }
    
}
