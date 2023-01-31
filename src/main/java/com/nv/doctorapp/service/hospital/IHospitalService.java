package com.nv.doctorapp.service.hospital;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Hospital;

@Service
public interface IHospitalService {

	public Hospital addHospital(Hospital hospital);
	public Hospital updateHospitalById(int hospitalId);
	public Hospital getHospitalByName(String hospitalName);
	public Hospital getHospitalById(int hospitalRating);
	public void deleteHospitalById(int hospitalId);
	public List<Hospital> getallHospital();
	public List<Hospital> getHospitalByCity(String city);
	//public List<Hospital> getHospitalByCity(String city);
	public Hospital getCity(String city);
	public Hospital getHospitalByRating(int hospitalRating);
	
	
}