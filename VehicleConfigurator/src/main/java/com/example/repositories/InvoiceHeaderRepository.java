package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.InvoiceHeader;
import com.example.entities.Model;

@Repository
public interface InvoiceHeaderRepository extends JpaRepository<InvoiceHeader, Integer> {
    List<InvoiceHeader> findByModel(Model model);
    List<InvoiceHeader> findByCustDetailsContaining(String keyword);
}
