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
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int appointmentId;
	private Patient patient;
	private Doctor doctor;
	private String date;
	private String appointmentStatus;
	private String remark;
	
	
	public Appointment(int appointmentId, Patient patient, Doctor doctor, String date,
			String appointmentStatus, String remark) {
		super();
		this.appointmentId = appointmentId;
		this.patient = patient;
		this.doctor = doctor;
		this.date = date;
		this.appointmentStatus = appointmentStatus;
		this.remark = remark;
		
	}
	
	

}
