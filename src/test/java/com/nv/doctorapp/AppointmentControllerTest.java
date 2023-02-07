package com.nv.doctorapp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.nv.doctorapp.entity.Appointment;
import com.nv.doctorapp.repository.appointment.AppointmentRepository;
import com.nv.doctorapp.service.appointment.AppointmentServiceImpl;

class AppointmentControllerTest {
	
	@InjectMocks 
	// use on which class to test
	AppointmentServiceImpl appointmentServiceImpl;
	@Mock
	AppointmentRepository appointmentRepository;
	@SuppressWarnings("deprecation")
	@BeforeEach
	public void doInit()
	{
	MockitoAnnotations.initMocks(this);
	}
	@Test
	@DisplayName("Test case to test insertion of Passenger when input values are valid")
	void testInsertAppointment() {
	// sample input
		Appointment sampleInput = new Appointment(1,"25-08-2023","Confirm","Appointment Fixed");
	// expected output
		Appointment actualOutput = new Appointment(1,"25-08-2023","Confirm","Appointment Fixed");
		Appointment expectedOutput = new Appointment(1,"25-08-2023","Confirm","Appointment Fixed");
	// call actual method and store actual result : actual output
	when(appointmentRepository.save(sampleInput)).thenReturn(actualOutput);
	// compare actual output with expected output
	assertEquals(actualOutput, expectedOutput);
	} 
	@Test
	@DisplayName("Test case to test insertion of Passenger when input values are invalid")
	void testInsertAppointment2() {
		Appointment sampleInput = new Appointment(1,"25-08-2023","Confirm","Appointment Fixed");
	// call actual method and store actual result : actual output 
	when(appointmentRepository.save(sampleInput)).thenThrow(NullPointerException.class);
	}


}
