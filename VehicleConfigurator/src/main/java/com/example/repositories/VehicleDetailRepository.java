package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Model;
import com.example.entities.VehicleDetail;

@Repository
public interface VehicleDetailRepository extends JpaRepository<VehicleDetail, Integer> {
    List<VehicleDetail> findByModel(Model model);
    List<VehicleDetail> findByModelModelId(int modelId);
    List<VehicleDetail> findByModel_ModelId(int modelId);
    List<VehicleDetail> findByIsConfigurable(char isConfigurable);
    List<VehicleDetail> findByModel_ModelIdAndCompType(int modelId, char compType);
    List<VehicleDetail> findByModel_ModelIdAndIsConfigurableTrue(int modelId);
    List<VehicleDetail> findByModel_ModelIdAndIsConfigurable(int modelId, char isConfigurable);
    List<VehicleDetail> findByModel_ModelIdAndCompTypeNotIn(Integer modelId, List<String> excludedTypes);
    List<VehicleDetail> findByModelModelIdAndIsConfigurable(Integer modelId, String isConfigurable);

}