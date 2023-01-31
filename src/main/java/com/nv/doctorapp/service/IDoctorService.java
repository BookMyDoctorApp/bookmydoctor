package com.nv.doctorapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Doctor;

@Service
public interface IDoctorService {

	public Doctor addDoctor(Doctor doctor)throws Exception;

	public Doctor updateDoctor(int doctorId);

	public Doctor getDoctorById(int doctorId);

	public void removeDoctorById(int doctorId);

	public List<Doctor> getAllDoctors();

}
