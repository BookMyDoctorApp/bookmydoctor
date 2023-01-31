package com.nv.doctorapp.service.hospital;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Hospital;
import com.nv.doctorapp.repository.hospital.IHospitalRepository;

@Service
public class HospitalServiceImpl implements IHospitalService{

	@Autowired
	IHospitalRepository ihospitalRepository;
	
	@Override
	public Hospital addHospital(Hospital hospital) {
		
		Hospital savedHospital = ihospitalRepository.save(hospital);
		return savedHospital;
	}
	
	@Override
	public List<Hospital> getallHospital() {
		
		return ihospitalRepository.findAll();
	}
	
	@Override
	public void deleteHospitalById(int hospitalId) {
		
		ihospitalRepository.deleteById(hospitalId);
	}
	
	@Override
	public Hospital updateHospitalById(int hospitalId) {
		
	
		Hospital updatedHospital=ihospitalRepository.getReferenceById(hospitalId);
		ihospitalRepository.save(updatedHospital);
		return updatedHospital;
	}

	@Override
	public Hospital getHospitalByName(String hospitalName) {
		
		//return ihospitalRepository.getHospitalByName(hospitalName);
		return null;
	}

	@Override
	public List<Hospital> getHospitalByCity(String city) {
		
		//return ihospitalRepository.getHopitalByCity(city);
		return null;
	}

	@Override
	public Hospital getHospitalById(int hospitalRating) {
		Hospital savedHospital=ihospitalRepository.getReferenceById(hospitalRating);
		return null;
	}

	@Override
	public Hospital getCity(String city) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Hospital getHospitalByRating(int hospitalRating) {
		// TODO Auto-generated method stub
		return null;
	}
}
