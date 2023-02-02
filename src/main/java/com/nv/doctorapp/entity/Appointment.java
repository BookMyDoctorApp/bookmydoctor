package com.nv.doctorapp.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
	private String status;
	private String remark;
	
	
	@OneToOne(cascade = CascadeType.PERSIST)
	private Doctor doctor;
	
	
	
	public Appointment(Patient patient, Doctor doctor, String date,
			String appointmentStatus, String remark) {
		super();
		
		this.date = date;
		this.status = status;
		this.remark = remark;
		
	}

}
