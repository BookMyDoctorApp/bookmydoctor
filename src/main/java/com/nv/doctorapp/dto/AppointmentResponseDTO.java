package com.nv.doctorapp.dto;

import com.nv.doctorapp.entity.Doctor;
import com.nv.doctorapp.entity.Patient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentResponseDTO {
	
	
	private int appointmentId;
	private Patient patient;
	private Doctor doctor;
	private String date;
	private String appointmentStatus;
	private String remark;
	

}
