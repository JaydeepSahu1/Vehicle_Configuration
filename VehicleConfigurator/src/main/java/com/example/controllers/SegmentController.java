package com.example.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Segment;
import com.example.services.SegmentService;

@RestController
@RequestMapping("/segments")
public class SegmentController {
    @Autowired
    private SegmentService segmentService;

    @GetMapping
    public List<Segment> getAllSegments() {
        return segmentService.getAllSegments();
    }
    @GetMapping("/id/{segId}")
    public Segment getSegmentById(@PathVariable int segId) {
        return segmentService.getSegmentById(segId);
    }

    @GetMapping("/name/{segName}")
    public Segment getSegmentByName(@PathVariable String segName) {
        return segmentService.getSegmentByName(segName);
    }

    @PostMapping
    public Segment addSegment(@RequestBody Segment segment) {
        return segmentService.createSegment(segment);
    }
}
