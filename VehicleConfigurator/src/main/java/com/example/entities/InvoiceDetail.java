package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "invoice_detail")
public class InvoiceDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inv_dtl_id")
    private int invDtlId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inv_id", nullable = false) // Matches FK in table
    private InvoiceHeader invoice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comp_id", nullable = false) // Matches FK in table
    private Component component;

    // Getters and Setters

    public int getInvDtlId() {
        return invDtlId;
    }

    public void setInvDtlId(int invDtlId) {
        this.invDtlId = invDtlId;
    }

    public InvoiceHeader getInvoice() {
        return invoice;
    }

    public void setInvoice(InvoiceHeader invoice) {
        this.invoice = invoice;
    }

    public Component getComponent() {
        return component;
    }

    public void setComponent(Component component) {
        this.component = component;
    }
}
