package com.nv.doctorapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nv.doctorapp.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

	//Appointment getAppointmentByStatus(String appointmentStatus);

	
}
