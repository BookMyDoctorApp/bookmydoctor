package com.nv.doctorapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Patient;
@Service
public interface IPatientService {
	
	public Patient registerPatient(Patient patient);
	public Patient updatepatientDetailsById(int patientId);
	public void removePatientDetailsById(int patientId);
	public Patient getPatientById(int PatientId);
	//public List<Patient> getPatientByName(String PatientName);
	//public List<Patient> getPatientByCity(String PatientCity);
	public List<Patient> getAllPatients();

}

