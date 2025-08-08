package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Manufacturer;
import com.example.entities.Segment;
import com.example.entities.SegmentManufacturerAssociation;

@Repository
public interface SegmentManufacturerAssociationRepository extends JpaRepository<SegmentManufacturerAssociation, Integer> {
    List<SegmentManufacturerAssociation> findBySegment(Segment segment);
    List<SegmentManufacturerAssociation> findByManufacturer(Manufacturer manufacturer);
    SegmentManufacturerAssociation findBySegmentAndManufacturer(Segment segment, Manufacturer manufacturer);
}

