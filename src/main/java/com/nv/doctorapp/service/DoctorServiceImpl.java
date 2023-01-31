package com.nv.doctorapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Doctor;
import com.nv.doctorapp.exception.InvalidInputException;
import com.nv.doctorapp.repository.IDoctorRepository;

@Service
public class DoctorServiceImpl implements IDoctorService {

	@Autowired
	private IDoctorRepository doctorRepository;

	/*
	 * @Override public Doctor addDoctor(Doctor doctor) throws InvalidInputException
	 * {
	 * 
	 * if(doctor != null) { if(doctor.getDoctorName().equals("")) { throw new
	 * InvalidInputException("Doctor Name", "Doctor Name is Null"); } Doctor
	 * savedDoctor=doctorRepository.save(doctor); return savedDoctor; } return null;
	 * }
	 */

	@Override
	public Doctor addDoctor(Doctor doctor) {

		Doctor savedDoctor = doctorRepository.save(doctor);
		return savedDoctor;
	}

	@Override
	public List<Doctor> getAllDoctors() {

		return doctorRepository.findAll();
	}

	@Override
	public void removeDoctorById(int doctorId) {
		
		doctorRepository.deleteById(doctorId);;
	}

	@Override
	public Doctor getDoctorById(int doctorId) {

		Doctor savedDoctor = doctorRepository.getReferenceById(doctorId);
		return savedDoctor;
	}

	@Override
	public Doctor updateDoctor(int doctorId) {
		return null;	
	}

}
