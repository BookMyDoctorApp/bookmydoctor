package com.nv.doctorapp.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int hospitalId;

	private String hospitalName;
	private String city;
	private String state;
	private String address;
	private int hospitalRating;
	private String imageName;
	// private list<doctor>

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "HospitalId")
	private List<Doctor> doctors;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "HospitalId")
	private List<Patient> patient;
	

	public Hospital(int hospitalId, String HospitalName, String city, String state, String address,
			int hospitalRating, String imageName) {
		super();
		this.hospitalId = hospitalId;
		this.hospitalName = hospitalName;
		this.city = city;
		this.state = state;
		this.address = address;
		this.hospitalRating = hospitalRating;
		this.imageName=imageName;
	}

}
