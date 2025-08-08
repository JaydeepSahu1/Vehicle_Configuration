package com.example.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Manufacturer;
import com.example.entities.Model;
import com.example.entities.Segment;

@Repository
public interface ModelRepository extends JpaRepository<Model, Integer> {
    List<Model> findByManufacturer(Manufacturer manufacturer);
    List<Model> findBySegment(Segment segment);
    Model findByModelName(String modelName);
    List<Model> findByManufacturerAndSegment(Manufacturer manufacturer, Segment segment);
    Model findByModelId(int modelId);
    @EntityGraph(attributePaths = {"defaultComponents", "defaultComponents.component", "manufacturer", "segment"})
    Optional<Model> findByModelId(Integer modelId);
}
