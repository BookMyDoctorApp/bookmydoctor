package com.nv.doctorapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Patient;
import com.nv.doctorapp.repository.IPatientRepository;



@Service

public class PatientServiceImpl implements IPatientService{
	

	@Autowired
	private IPatientRepository patientRepository;

	@Override
	public Patient registerPatient(Patient patient) {
		
		 return patientRepository.save(patient);
		
	}

	@Override
	public Patient updatepatientDetailsById(int patientId) {
		
		Patient updatedPatient = patientRepository.getReferenceById(patientId);
		patientRepository.save(updatedPatient);
		return updatedPatient;
	}

	@Override
	public void removePatientDetailsById(int patientId) {
		
		patientRepository.deleteById(patientId);
	}


	@Override
	public List<Patient> getAllPatients() {
		
		return patientRepository.findAll();
	}

	@Override
	public Patient getPatientById(int patientId) {
		
			Patient savedPatient = patientRepository.getReferenceById(patientId);
		return savedPatient;
	}
}

	