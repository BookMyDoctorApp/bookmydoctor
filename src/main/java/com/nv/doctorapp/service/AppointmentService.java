package com.nv.doctorapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Appointment;
import com.nv.doctorapp.entity.Doctor;
import com.nv.doctorapp.entity.Patient;


@Service
public interface AppointmentService {
	

	public List<Appointment> getAllAppointments();
	public Appointment getAppointmentById(int appointmentId);
	public Appointment addAppointment(Appointment app);
	public void removeAppointmentById(int appointmentId);
	public Appointment updateAppointment(int appointmentId);
	public Appointment getAppointmentByPatient(Patient patient);
	
	//public Appointment getAppointmentById(int appointmentId);
	
	
	//public Appointment getAppointmentByDoctor(Doctor doctor);
	//public Appointment getAppointmentByDate(String date);
	//public Appointment getAppointmentByStatus(String appointmentStatus);
	//public Appointment getAppointmentByRemark(String remark);

	
	
	
	

}
 