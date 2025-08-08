package com.example.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Segment;
import com.example.repositories.SegmentRepository;

@Service
public class SegmentService {

    @Autowired
    private SegmentRepository segmentRepository;

    public List<Segment> getAllSegments() {
        return segmentRepository.findAll();
    }

    public Segment getSegmentById(int segId) {
        return segmentRepository.findById(segId)
                .orElseThrow(() -> new RuntimeException("Segment not found with id " + segId));
    }

    public Segment getSegmentByName(String segName) {
        Segment segment = segmentRepository.findBySegName(segName);
        if (segment == null) {
            throw new RuntimeException("Segment not found with name " + segName);
        }
        return segment;
    }

    public Segment createSegment(Segment segment) {
        return segmentRepository.save(segment);
    }
}
