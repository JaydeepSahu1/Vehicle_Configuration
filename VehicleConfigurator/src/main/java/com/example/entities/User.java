package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User 
{
	private int userid;
	private String company_name;
	private String add1;
	private String add2;
	private String city;
	private String state;
	private int pin;
	private String tel;
	private String fax;
	private String auth_name;
	private String designation;
	private String auth_tel;
	private String cell;
	private String company_st_no;
	private String company_vat_no;
	private String tax_pan;
	private holding_type holding_type;
	
	public enum holding_type
	{
		Proprietary,
		Pvt_Ltd,
		Ltd 
	}
	
	private String email;
	private String password;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	
	@Column(name="company_name",nullable = false)
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	
	@Column(name="add1",nullable = false)
	public String getAdd1() {
		return add1;
	}
	public void setAdd1(String add1) {
		this.add1 = add1;
	}
	
	@Column(name="add2")
	public String getAdd2() {
		return add2;
	}
	public void setAdd2(String add2) {
		this.add2 = add2;
	}
	
	@Column(name="city",nullable = false)
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	@Column(name="state",nullable = false)
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	@Column(name="pin",nullable = false)
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	
	@Column(name="tel")
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	
	@Column(name="fax")
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	
	@Column(name="auth_name",nullable = false)
	public String getAuth_name() {
		return auth_name;
	}
	public void setAuth_name(String auth_name) {
		this.auth_name = auth_name;
	}
	
	@Column(name="designation",nullable = false)
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	@Column(name="auth_tel",nullable = false)
	public String getAuth_tel() {
		return auth_tel;
	}
	public void setAuth_tel(String auth_tel) {
		this.auth_tel = auth_tel;
	}
	
	@Column(name="cell")
	public String getCell() {
		return cell;
	}
	public void setCell(String cell) {
		this.cell = cell;
	}
	
	@Column(name="company_st_no",nullable = false)
	public String getCompany_st_no() {
		return company_st_no;
	}
	public void setCompany_st_no(String company_st_no) {
		this.company_st_no = company_st_no;
	}
	
	@Column(name="company_vat_no",nullable = false)
	public String getCompany_vat_no() {
		return company_vat_no;
	}
	public void setCompany_vat_no(String company_vat_no) {
		this.company_vat_no = company_vat_no;
	}
	
	@Column(name="tax_pan")
	public String getTax_pan() {
		return tax_pan;
	}
	public void setTax_pan(String tax_pan) {
		this.tax_pan = tax_pan;
	}
	
	@Column(name="email", unique=true ,nullable = false)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name="password",nullable = false)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Enumerated(EnumType.STRING)
    @Column(name = "holding_type")
	public holding_type getHolding_type() {
		return holding_type;
	}
	public void setHolding_type(holding_type holding_type) {
		this.holding_type = holding_type;
	}
	@Override
	public String toString() {
		return "User [userid=" + userid + ", company_name=" + company_name + ", add1=" + add1 + ", add2=" + add2
				+ ", city=" + city + ", state=" + state + ", pin=" + pin + ", tel=" + tel + ", fax=" + fax
				+ ", auth_name=" + auth_name + ", designation=" + designation + ", auth_tel=" + auth_tel + ", cell="
				+ cell + ", company_st_no=" + company_st_no + ", company_vat_no=" + company_vat_no + ", tax_pan="
				+ tax_pan + ", holding_type=" + holding_type + ", email=" + email + ", password=" + password + "]";
	}
	
}
