package com.nv.doctorapp.repository.hospital;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nv.doctorapp.entity.Hospital;

@Repository
public interface IHospitalRepository extends JpaRepository<Hospital,Integer>,CustomHospitalRepository{

	List<Hospital> getHospitalByCity(String city);

}
