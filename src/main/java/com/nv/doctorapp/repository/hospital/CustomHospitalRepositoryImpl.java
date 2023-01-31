package com.nv.doctorapp.repository.hospital;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import com.nv.doctorapp.entity.Hospital;
import com.nv.doctorapp.service.HospitalServiceImpl;
@Primary
@Component("cityname")

public class CustomHospitalRepositoryImpl implements CustomHospitalRepository{
	
	public  List<Hospital> getHospitalByCity(String city) {
		return null;

	}

	//@Override
	//public Hospital getHospitalByCity(Hospital hospital) {
		// TODO Auto-generated method stub
		//return null;
	//}

	

	/*
	@Override
	public Hospital getHospitalByCity(String city) {
		hospital.getHospitalByCity();
		return hospital;
	}
	*/
	
}
