package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.InvoiceDetail;
import com.example.services.InvoiceDetailService;

@RestController
@RequestMapping("/invoice-details")
public class InvoiceDetailController {
    @Autowired
    private InvoiceDetailService invoiceDetailService;

    @GetMapping
    public List<InvoiceDetail> getAllInvoiceDetails() {
        return invoiceDetailService.getAllInvoiceDetails();
    }

    @PostMapping
    public InvoiceDetail addInvoiceDetail(@RequestBody InvoiceDetail invoiceDetail) {
        return invoiceDetailService.createInvoiceDetail(invoiceDetail);
    }
}
