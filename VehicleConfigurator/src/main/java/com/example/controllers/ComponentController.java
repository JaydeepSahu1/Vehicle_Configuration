package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.entities.Component;
import com.example.services.ComponentService;

@RestController
@RequestMapping("/components")
public class ComponentController {
    @Autowired
    private ComponentService componentService;

    @GetMapping
    public List<Component> getAllComponents() {
        return componentService.getAllComponents();
    }
    @GetMapping("/id/{compId}")
    public Component getComponentById(@PathVariable int compId) {
        return componentService.getComponentById(compId);
    }
    @GetMapping("/name/{compName}")
    public Component getComponentByName(@PathVariable String compName) {
        return componentService.getComponentByName(compName);
    }

    @PostMapping
    public Component addComponent(@RequestBody Component component) {
        return componentService.createComponent(component);
    }
}
