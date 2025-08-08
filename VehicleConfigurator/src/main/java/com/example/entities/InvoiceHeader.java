package com.example.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "invoice_header")
public class InvoiceHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inv_id")
    private int invId;

    @Column(name = "inv_date", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP", nullable = false)
    private LocalDateTime invDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "model_id", nullable = false) // Matches FK in table
    private Model model;

    @Column(name = "total_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal totalAmount;

    @Column(name = "tax", precision = 12, scale = 2, nullable = false)
    private BigDecimal tax;

    @Column(name = "final_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal finalAmount;

    @Column(name = "cust_details", length = 500, nullable = false)
    private String custDetails;

    // Getters and Setters

    public int getInvId() {
        return invId;
    }

    public void setInvId(int invId) {
        this.invId = invId;
    }

    public LocalDateTime getInvDate() {
        return invDate;
    }

    public void setInvDate(LocalDateTime invDate) {
        this.invDate = invDate;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public BigDecimal getTax() {
        return tax;
    }

    public void setTax(BigDecimal tax) {
        this.tax = tax;
    }

    public BigDecimal getFinalAmount() {
        return finalAmount;
    }

    public void setFinalAmount(BigDecimal finalAmount) {
        this.finalAmount = finalAmount;
    }

    public String getCustDetails() {
        return custDetails;
    }

    public void setCustDetails(String custDetails) {
        this.custDetails = custDetails;
    }
}
