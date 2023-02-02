package com.nv.doctorapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

	public Patient(String patientName, String patientCity) {
		super();
		this.patientName = patientName;
		this.patientCity = patientCity;
	}
}
