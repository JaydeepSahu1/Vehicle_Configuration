package com.example.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Manufacturer;
import com.example.entities.Segment;
import com.example.entities.SegmentManufacturerAssociation;
import com.example.repositories.SegmentManufacturerAssociationRepository;

@Service
public class SegmentManufacturerAssociationService {
    @Autowired
    private SegmentManufacturerAssociationRepository assocRepository;
    

    public List<SegmentManufacturerAssociation> getAllAssociations() {
        return assocRepository.findAll();
    }
    
    public List<Manufacturer> getManufacturersBySegment(Segment segment) {
        List<SegmentManufacturerAssociation> associations = assocRepository.findBySegment(segment);
        return associations.stream()
                .map(SegmentManufacturerAssociation::getManufacturer)
                .distinct()
                .collect(Collectors.toList());
    }

    public SegmentManufacturerAssociation createAssociation(SegmentManufacturerAssociation association) {
        return assocRepository.save(association);
    }
}
