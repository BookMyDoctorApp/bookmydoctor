package com.nv.doctorapp.service.feedback;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nv.doctorapp.entity.Doctor;
import com.nv.doctorapp.entity.Feedback;
import com.nv.doctorapp.entity.Hospital;
import com.nv.doctorapp.entity.Patient;
import com.nv.doctorapp.exception.feedback.InvalidDataException;
import com.nv.doctorapp.repository.doctor.IDoctorRepository;
import com.nv.doctorapp.repository.feedback.IFeedbackRepository;
import com.nv.doctorapp.repository.hospital.IHospitalRepository;
import com.nv.doctorapp.repository.patient.IPatientRepository;

@Service
public class FeedbackServiceImpl implements IFeedbackService{

	@Autowired
	IFeedbackRepository feedbackRepository;
	@Autowired
	IDoctorRepository doctorRepository;
	@Autowired
	IHospitalRepository ihospitalRepository;

	// @Autowired
	// IPatientRepository patientRepository;

	@Override
	public Feedback addFeedback(Feedback feedback) throws Exception {

//		if (feedback.getDoctorName().equals("")) {
		if (feedback.getFeedback().equals("")) {
			throw new InvalidDataException("Doctor Name cannot be null");
		} else
			return feedbackRepository.save(feedback);
	}

	@Override
	public List<Feedback> listOfAllFeedbacks() {

		return feedbackRepository.findAll();
	}

	@Override
	public Feedback updateFeedbackByDoctorId(int feedbackId, int doctorId) {
		
		Feedback feedbackFromDB = getFeedbackId(feedbackId);
		Doctor doctorFromDB = doctorRepository.getReferenceById(doctorId);
		
		if (feedbackFromDB != null & doctorFromDB != null) {
			
			List<Feedback> allFeedback = doctorFromDB.getFeedback();
			
			if (allFeedback != null && allFeedback.isEmpty() == false) {
				
				allFeedback.add(feedbackFromDB);
				doctorFromDB.setFeedback(allFeedback);
				
			} else {
			
				List<Feedback> newDoctorList = new ArrayList<>();
				newDoctorList.add(feedbackFromDB);

				doctorFromDB.setFeedback(newDoctorList);
			}
			doctorRepository.saveAndFlush(doctorFromDB);
			feedbackRepository.save(feedbackFromDB);
			return feedbackFromDB;
		} else {
			return null;
		}
	}
	
	@Override
	public Feedback updateFeedbackByHospitalId(int feedbackId, int hospitalId) {
	
		Feedback feedbackFromDB = getFeedbackId(feedbackId);
	
		Hospital hospitalFromDB = ihospitalRepository.getReferenceById(hospitalId);
	
		if (feedbackFromDB != null & hospitalFromDB != null) {
			
			List<Feedback> allFeedback = hospitalFromDB.getFeedback();
			
			if (allFeedback != null && allFeedback.isEmpty() == false) {
	
				allFeedback.add(feedbackFromDB);
				hospitalFromDB.setFeedback(allFeedback);
			} 
			else {
	
				List<Feedback> newFeedbackList = new ArrayList<>();
				newFeedbackList.add(feedbackFromDB);
				hospitalFromDB.setFeedback(newFeedbackList);
			}
				ihospitalRepository.saveAndFlush(hospitalFromDB);
				feedbackRepository.save(feedbackFromDB);
	return feedbackFromDB;
	} else {
	return null;
	}
	}

	@Override
	public List<Feedback> getFeedbackByHospitalName(String hospitalName) {
		
		return feedbackRepository.getFeedbackByHospitalName(hospitalName);
	}

	

	
	@Override
	public List<Feedback> getFeedbackByDoctorName( String doctorName) {

		return feedbackRepository.getFeedbackByDoctorName(doctorName);
	}
	
	
	@Override
	public List<Feedback> getFeedbackByPatientName( String patientName) {

		return feedbackRepository.getFeedbackByPatientName(patientName);
	}


	/*
	 * @Override public List<Feedback> getFeedbackByPatientId(int patientId) throws
	 * NullPointerException {
	 * 
	 * if (patientId == 0) { throw new NullPointerException("Invalid Id"); }
	 * 
	 * return feedbackRepository.getFeedbackByPatientId(patientId); }
	 */
	
	@Override
	public Feedback getFeedbackId(int feedbackId) {

		Feedback updatedFeedback = feedbackRepository.getReferenceById(feedbackId);
		feedbackRepository.save(updatedFeedback);
		return updatedFeedback;
	}

	
	/*
	 * @Override public void removePatientDetailsByfeedbackComment(String
	 * feedbackComment) {
	 * 
	 * feedbackRepository.deleteAll();
	 * 
	 * }
	 * 
	 */

}
