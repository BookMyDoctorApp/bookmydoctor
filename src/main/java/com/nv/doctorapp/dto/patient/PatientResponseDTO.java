package com.nv.doctorapp.dto.patient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class PatientResponseDTO {
	
	private int patientId;
	private String patientName;
	private String patientCity;
	private String patientAge;
	private String patientGender;
	private String patientDisease;
	
}
