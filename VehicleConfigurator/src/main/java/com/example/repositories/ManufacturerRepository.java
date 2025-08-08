package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Manufacturer;

@Repository
public interface ManufacturerRepository extends JpaRepository<Manufacturer, Integer> {
    Manufacturer findByMfgName(String mfgName);
    List<Manufacturer> findDistinctByModelsSegmentSegId(int segId);

}