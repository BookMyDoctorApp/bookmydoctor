package com.nv.doctorapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.nv.doctorapp.entity.Appointment;
import com.nv.doctorapp.entity.Patient;
import com.nv.doctorapp.repository.AppointmentRepository;

public class AppointmentServiceImpl implements AppointmentService {
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	@Override
	public List<Appointment> getAllAppointments() {
		// TODO Auto-generated method stub
		return appointmentRepository.findAll();
	}

	@Override
	public Appointment getAppointmentById(int appointmentId) {
		// TODO Auto-generated method stub
		return appointmentRepository.getReferenceById(appointmentId);
	}

	@Override
	public Appointment addAppointment(Appointment app) {
		// TODO Auto-generated method stub
		return appointmentRepository.save(app);
	}

	@Override
	public void removeAppointmentById(int appointmentId) {
		// TODO Auto-generated method stub
		 appointmentRepository.deleteById(appointmentId);
	}

	@Override
	public Appointment updateAppointment(int appointmentId) {
		// TODO Auto-generated method stub
		return appointmentRepository.save(appointmentId);
	}

	@Override
	public Appointment getAppointmentByPatient(Patient patient) {
		// TODO Auto-generated method stub
		return appointmentRepository.save(patient);
	}
	
	

	
	
}
