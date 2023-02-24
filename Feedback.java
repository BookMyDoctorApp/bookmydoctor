package com.nv.doctorapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int feedbackId;

	private String doctorName;
	private String patientName;
	private String hospitalName;
	private String feedback;
	private int rating;

	public Feedback( String doctorName,String patientName,String hospitalName, int rating,String feedback) {
		super();
		this.patientName=patientName;
		this.doctorName = doctorName;
		this.hospitalName=hospitalName;
		this.rating = rating;
		this.feedback = feedback;
	}

	

}
