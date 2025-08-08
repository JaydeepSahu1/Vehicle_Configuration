package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Segment;

@Repository
public interface SegmentRepository extends JpaRepository<Segment, Integer> {
    Segment findBySegName(String segName);
}