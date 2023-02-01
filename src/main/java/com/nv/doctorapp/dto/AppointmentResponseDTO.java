package com.nv.doctorapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentResponseDTO {
	
	
	private int appointmentId;
	//private Patient patient;
	//private Doctor doctor;
	private String date;
	private String appointmentStatus;
	private String remark;
	

}
