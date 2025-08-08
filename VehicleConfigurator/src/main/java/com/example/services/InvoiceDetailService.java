package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.InvoiceDetail;
import com.example.repositories.InvoiceDetailRepository;

@Service
public class InvoiceDetailService {
    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    public List<InvoiceDetail> getAllInvoiceDetails() {
        return invoiceDetailRepository.findAll();
    }

    public InvoiceDetail createInvoiceDetail(InvoiceDetail detail) {
        return invoiceDetailRepository.save(detail);
    }
}
