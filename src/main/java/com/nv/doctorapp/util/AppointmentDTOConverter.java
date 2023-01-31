package com.nv.doctorapp.util;

import org.springframework.stereotype.Component;


import com.nv.doctorapp.dto.AppointmentResponseDTO;
import com.nv.doctorapp.entity.Appointment;

@Component
public class AppointmentDTOConverter {
	
	public AppointmentResponseDTO convertTo(Appointment appointment) {
			// TODO Auto-generated constructor stub
		return new AppointmentResponseDTO(appointment.getAppointmentId(), appointment.getPatient(), appointment.getDoctor(), appointment.getDate(), appointment.getAppointmentStatus(), appointment.getRemark() );
		}

	
	}
	
	
	
	
	
	/*public AppointmentResponseDTO getAppointmentResponseDTO(Appointment appointment) {
		
		AppointmentResponseDTO dto = new AppointmentResponseDTO();
		dto.setAppointmentId(appointment.getAppointmentId());
		dto.setPatient(appointment.getPatient());
		dto.setDoctor(appointment.getDoctor());
		dto.setDate(appointment.getDate());
		dto.setAppointmentStatus(appointment.getAppointmentStatus());
		dto.setRemark(appointment.getRemark());
		
		
		dto.setMsg("Appointment Done");
		return dto;
		
	}

	public AppointmentDTO GetAppointmentDTO(Appointment appointment) {
		// TODO Auto-generated method stub
		return new AppointmentDTO(appointment.getAppointmentId(), appointment.getPatient(), appointment.getDoctor(), appointment.getDate(), appointment.getAppointmentStatus(), appointment.getRemark());
	}*/
	
	


