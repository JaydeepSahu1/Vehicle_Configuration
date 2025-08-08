package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.InvoiceDetail;
import com.example.entities.InvoiceHeader;

@Repository
public interface InvoiceDetailRepository extends JpaRepository<InvoiceDetail, Integer> {

    // Fetch by full Invoice object
    List<InvoiceDetail> findByInvoice(InvoiceHeader invoice);

    // Fetch by invoice ID directly using field mapping
    List<InvoiceDetail> findByInvoice_InvId(int invId);

    // Fetch by component ID (if needed)
    List<InvoiceDetail> findByComponent_CompId(int compId);
}

