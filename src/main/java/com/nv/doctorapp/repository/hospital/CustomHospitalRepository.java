package com.nv.doctorapp.repository;

import java.util.List;


import com.nv.doctorapp.entity.Hospital;

public interface CustomHospitalRepository {

	//public Hospital getHospitalByCity(Hospital hospital);
	//public String getHospitalByCity(String city);
	public List<Hospital> getHospitalByCity(String city);
        
	
	


	
}
