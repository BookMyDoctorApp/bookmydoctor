package com.nv.doctorapp.service.feedback;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Feedback;

@Service
public interface IFeedbackService {

	public Feedback addFeedback(Feedback feedback) throws Exception;

	public List<Feedback> listOfAllFeedbacks();

	public List<Feedback> getFeedbackByDoctorName(String doctorName);
	
	public List<Feedback> getFeedbackByHospitalName(String hospitalName);
	
	List<Feedback> getFeedbackByPatientName(String patientName);

	public Feedback getFeedbackId(int feedbackId);
	
	public Feedback updateFeedbackByDoctorId(int feedbackId, int doctorId);
	
	//public Feedback updateFeedbackByHospitalId(int feedbackId, int hospitalId);
	
	public Feedback updateFeedbackByHospitalId(int feedback, int hospitalId);
	 
}
