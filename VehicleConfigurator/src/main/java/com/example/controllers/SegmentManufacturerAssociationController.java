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
import com.example.entities.Segment;
import com.example.entities.SegmentManufacturerAssociation;
import com.example.services.SegmentManufacturerAssociationService;
import com.example.services.SegmentService;

@RestController
@RequestMapping("/segment-mfg")
public class SegmentManufacturerAssociationController {
	
    @Autowired
    private SegmentManufacturerAssociationService assocService;

    @Autowired
    private SegmentService segmentService;

    @GetMapping
    public List<SegmentManufacturerAssociation> getAllAssociations() {
        return assocService.getAllAssociations();
    }

    @PostMapping
    public SegmentManufacturerAssociation addAssociation(@RequestBody SegmentManufacturerAssociation association) {
        return assocService.createAssociation(association);
    }
    
    @GetMapping("/manufacturers/by-segment/{segmentId}")
    public List<Manufacturer> getManufacturersBySegment(@PathVariable int segmentId) {
        Segment segment = segmentService.getSegmentById(segmentId);
        return assocService.getManufacturersBySegment(segment);
    }
}
