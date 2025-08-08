package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Component;
import com.example.repositories.ComponentRepository;
@Service
public class ComponentService {
    @Autowired
    private ComponentRepository componentRepository;

    public List<Component> getAllComponents() {
        return componentRepository.findAll();
    }
    public Component getComponentById(int compId) {
        return componentRepository.findById(compId)
                .orElseThrow(() -> new RuntimeException("Component not found with id " + compId));
    }
    public Component getComponentByName(String compName) {
        return componentRepository.findByCompName(compName);
    }

    public Component createComponent(Component component) {
        return componentRepository.save(component);
    }
}
