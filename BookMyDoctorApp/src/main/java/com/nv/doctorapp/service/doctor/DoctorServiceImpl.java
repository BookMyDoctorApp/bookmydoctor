package com.nv.doctorapp.service.doctor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nv.doctorapp.entity.Doctor;
import com.nv.doctorapp.entity.Hospital;
//import com.nv.doctorapp.exception.doctor.InvalidDoctorException;
//import com.nv.doctorapp.exception.doctor.CommonExceptionHandler;
import com.nv.doctorapp.repository.doctor.IDoctorRepository;
import com.nv.doctorapp.repository.hospital.IHospitalRepository;

@Service

public class DoctorServiceImpl implements IDoctorService {

	@Autowired
	private IDoctorRepository doctorRepository;

	@Autowired
	private IHospitalRepository ihospitalRepository;

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

		doctorRepository.deleteById(doctorId);
		;
	}

	@Override
	public Doctor updateDoctor(int doctorId) {
		return null;
	}

	@Override
	public Doctor updateHospitalByDoctorId(int doctorId, int hospitalId) {

		Doctor doctorFromDB = getDoctorById(doctorId);
		Hospital hospitalFromDB = ihospitalRepository.getReferenceById(hospitalId);

		if (doctorFromDB != null & hospitalFromDB != null) {
			List<Doctor> allDoctors = hospitalFromDB.getDoctors();

			if (allDoctors != null && allDoctors.isEmpty() == false) {
				allDoctors.add(doctorFromDB);
				hospitalFromDB.setDoctors(allDoctors);
			} else {
				List<Doctor> newDoctorList = new ArrayList<>();
				newDoctorList.add(doctorFromDB);
				hospitalFromDB.setDoctors(newDoctorList);
			}
			ihospitalRepository.saveAndFlush(hospitalFromDB);
			doctorRepository.save(doctorFromDB);
			return doctorFromDB;
		} else {
			return null;
		}
	}

	@Override
	public Doctor getDoctorById(int doctorId) {

		if (doctorId >= 1) {
			return doctorRepository.getReferenceById(doctorId);
		}
		return null;

	}

}