package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.InvoiceHeader;
import com.example.services.InvoiceHeaderService;

@RestController
@RequestMapping("/invoices")
public class InvoiceHeaderController {
    @Autowired
    private InvoiceHeaderService invoiceHeaderService;

    @GetMapping
    public List<InvoiceHeader> getAllInvoices() {
        return invoiceHeaderService.getAllInvoices();
    }

    @PostMapping
    public InvoiceHeader createInvoice(@RequestBody InvoiceHeader invoiceHeader) {
        return invoiceHeaderService.createInvoice(invoiceHeader);
    }
}
