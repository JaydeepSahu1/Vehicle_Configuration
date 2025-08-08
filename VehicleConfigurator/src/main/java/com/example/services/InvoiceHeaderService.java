package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.InvoiceHeader;
import com.example.repositories.InvoiceHeaderRepository;

@Service
public class InvoiceHeaderService {
    @Autowired
    private InvoiceHeaderRepository invoiceHeaderRepository;

    public List<InvoiceHeader> getAllInvoices() {
        return invoiceHeaderRepository.findAll();
    }

    public InvoiceHeader createInvoice(InvoiceHeader invoice) {
        return invoiceHeaderRepository.save(invoice);
    }
}
