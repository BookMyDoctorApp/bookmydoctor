package com.nv.doctorapp.repository.doctor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nv.doctorapp.entity.Doctor;
import com.nv.doctorapp.entity.Hospital;

@Repository
public interface IDoctorRepository extends JpaRepository<Doctor, Integer> {

	// public List<Doctor> updateDoctorByHospitalId(int hospitalId);
	// public Doctor getDoctorById(int hospitalId, int doctorId);
}
