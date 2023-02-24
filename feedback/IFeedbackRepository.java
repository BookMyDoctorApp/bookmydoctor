package com.nv.doctorapp.repository.feedback;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nv.doctorapp.entity.Feedback;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback, Integer> {

	

   List<Feedback> getFeedbackByDoctorName(String doctorName);
   
   List<Feedback> getFeedbackByHospitalName(String hospitalName);
   
   List<Feedback> getFeedbackByPatientName(String patientName);

	
}
