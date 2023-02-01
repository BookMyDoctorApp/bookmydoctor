package com.nv.doctorapp.controller;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nv.doctorapp.dto.PatientResponseDTO;
import com.nv.doctorapp.entity.Patient;
import com.nv.doctorapp.service.IPatientService;
import com.nv.doctorapp.util.PatientDTOConvertor;

@RestController
@RequestMapping("/patient")
public class PatientRestController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	@Autowired
	IPatientService patientService;
	
	@Autowired
	PatientDTOConvertor dtoConvertor;
	
	public PatientRestController() {
		logger.info(" Patient Rest Controller Called)");
		System.out.println("----Patient Rest Controller Called----");
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<PatientResponseDTO> savePatient(@RequestBody Patient patient) {
		
		Patient savedPatient = patientService.registerPatient(patient);
		logger.info("Patient saved" + savedPatient);
		
		PatientResponseDTO dto = dtoConvertor.convertTo(savedPatient);
		
		return new ResponseEntity<PatientResponseDTO>(dto, HttpStatus.OK);
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<PatientResponseDTO>> getAllPatients(){
		
		List<Patient> allPatients = patientService.getAllPatients();
		List<PatientResponseDTO> dtoList = new ArrayList<>();
		
		for (Patient patient : allPatients) {
			
			PatientResponseDTO dtoObj = dtoConvertor.convertTo(patient);
			dtoList.add(dtoObj);
		}
		return new ResponseEntity<List<PatientResponseDTO>>(dtoList, HttpStatus.OK);
	}
	
	@GetMapping("/getPatient/{patientId}")
	public ResponseEntity<PatientResponseDTO> getPatientById(@PathVariable int patientId) {
		
		Patient savedPatient = patientService.getPatientById(patientId);
		PatientResponseDTO dto = dtoConvertor.convertTo(savedPatient);
		return new ResponseEntity<PatientResponseDTO>(dto, HttpStatus.OK);
	}
	
	@DeleteMapping("/deletePatient/{patientId}")
	public void removePatient(@PathVariable int patientId) {
		patientService.removePatientDetailsById(patientId);
	}
	
	@GetMapping("/getPatient/{patientName}")
	public ResponseEntity<PatientResponseDTO> getPatientByName(@PathVariable int patientName) {
		
		Patient savedPatient = patientService.getPatientById(patientName);
		PatientResponseDTO dto = dtoConvertor.convertTo(savedPatient);
		return new ResponseEntity<PatientResponseDTO>(dto, HttpStatus.OK);
	}
	
	@GetMapping("/getPatient/{patientCity}")
	public ResponseEntity<PatientResponseDTO> getPatientByCity(@PathVariable int patientCity) {
		
		Patient savedPatient = patientService.getPatientById(patientCity);
		PatientResponseDTO dto = dtoConvertor.convertTo(savedPatient);
		return new ResponseEntity<PatientResponseDTO>(dto, HttpStatus.OK);
	}
	/*@GetMapping("/custom/{location}")
	public ResponseEntity<DoctorResponseDTO> getDoctorByLocation(@PathVariable String Location){
		
		Doctor savedDoctor = customRepository.getDoctorByLocation(Location);
		DoctorResponseDTO dto = dtoConvertor.convertTo(savedDoctor);
		return new ResponseEntity<DoctorResponseDTO>(dto, HttpStatus.OK);
		
	}
	
	@PutMapping("/getPatient/{patientId}")
	public String updateDoctor(@PathVariable int patientId){
		Patient updatedDoctor = patientService.getPatientById(patientId);
		return updatedDoctor.toString();
		
}*/
}
	
	
		
	
	


