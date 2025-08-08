package com.example.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entities.AlternateComponent;
import com.example.services.AlternateComponentService;

@RestController
@RequestMapping("/alternate-components")
public class AlternateComponentController {

    @Autowired
    private AlternateComponentService alternateComponentService;

    @GetMapping
    public List<AlternateComponent> getAllAlternateComponents() {
        return alternateComponentService.getAllAlternateComponents();
    }
    
    @GetMapping("/model/{modelId}")
    public Map<Character, Map<Integer, List<AlternateComponent>>> getAlternatesGroupedByComponentType(
            @PathVariable Integer modelId) {
        return alternateComponentService.getGroupedAlternatesByModel(modelId);
    }
    
    @PostMapping
    public AlternateComponent addAlternateComponent(@RequestBody AlternateComponent altComp) {
        return alternateComponentService.addAlternateComponent(altComp);
    }
}
