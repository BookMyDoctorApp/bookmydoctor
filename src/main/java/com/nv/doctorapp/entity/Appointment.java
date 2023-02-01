package com.nv.doctorapp.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name="appointment")
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int appointmentId;
	private String date;
	private String appointmentStatus;
	private String remark;
	
	public Appointment(Patient patient, Doctor doctor, String date,
			String appointmentStatus, String remark) {
		super();
		
		this.date = date;
		this.appointmentStatus = appointmentStatus;
		this.remark = remark;
		
	}
	
	@JoinColumn(name="doctorId")
	@OneToOne(cascade = CascadeType.ALL)
	private Doctor doctor;
	
	
	@JoinColumn(name="patientId")
	@OneToOne(cascade = CascadeType.ALL)
	private Patient patient;
	
	

}
