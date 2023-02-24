package com.nv.doctorapp.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int patientId;

	private String patientName;
	private String patientCity;
	private int patientAge;
	private String patientGender;
	private String patientDisease;
	private String patientPhoneNumber;
	private String patientBloodGroup;
	private String password;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "PatientId")
	private List<Appointment> appointment;
	
	
	
	
	public Patient(int patientId, String patientName, String patientCity, int patientAge, String patientGender,
			String patientDisease, String PatientPhoneNumber,String patientBloodGroup, String password) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.patientCity = patientCity;
		this.patientAge = patientAge;
		this.patientGender = patientGender;
		this.patientDisease = patientDisease;
		this.patientPhoneNumber = patientPhoneNumber;
		this.patientBloodGroup = patientBloodGroup;
		this.password=password;
		
	}

	
}