package com.nv.doctorapp.repository.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nv.doctorapp.entity.Doctor;

@Repository
public interface IDoctorRepository extends JpaRepository<Doctor, Integer> {

}
