package com.nv.doctorapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private int  patientId;
	private String patientName;
	private String patientCity;
	
	
	
	public Patient(String patientName, String City) {
		super();
		this.patientName = patientName;
		this.patientCity = patientCity;
	}
}
