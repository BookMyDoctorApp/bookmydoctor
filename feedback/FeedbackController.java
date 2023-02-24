package com.nv.doctorapp.controller.feedback;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nv.doctorapp.dto.feedback.FeedbackDTO;
import com.nv.doctorapp.dto.hospital.HospitalDTO;
import com.nv.doctorapp.entity.Feedback;
import com.nv.doctorapp.entity.Hospital;
import com.nv.doctorapp.service.feedback.IFeedbackService;
import com.nv.doctorapp.util.feedback.FeedbackDTOConvertor;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = {"http://localhost:4200/","http://localhost:2024/"}, allowedHeaders="*")
public class FeedbackController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	IFeedbackService feedbackService;

	@Autowired
	FeedbackDTOConvertor dtoConvertor;

	public FeedbackController() {
		logger.info("Feedback Controller Called");
		System.err.println("Feedback Controller Called");

	}

	@PostMapping("/submit")

	public ResponseEntity<FeedbackDTO> saveFeedback(@RequestBody Feedback feedback) throws Exception {

		Feedback savedFeedback = feedbackService.addFeedback(feedback);
		logger.info("----> Feedback Saved <----" + savedFeedback);

		FeedbackDTO dto = dtoConvertor.convertTo(savedFeedback);
		return new ResponseEntity<FeedbackDTO>(dto, HttpStatus.OK);
	}

	
	@GetMapping("/list")

	public ResponseEntity<List<FeedbackDTO>> listOfAllFeedback() {
		List<Feedback> allFeedbackInDB = feedbackService.listOfAllFeedbacks();
		List<FeedbackDTO> dtoList = new ArrayList<>();
		for (Feedback feedback : allFeedbackInDB) {
			FeedbackDTO dto = dtoConvertor.convertTo(feedback);
			dtoList.add(dto);
		}

		return new ResponseEntity<List<FeedbackDTO>>(dtoList, HttpStatus.OK);
	}
	@GetMapping("/id/{feedbackId}")

	public ResponseEntity<FeedbackDTO> getFeedbackId(@PathVariable int feedbackId) {

		Feedback savedFeedback = feedbackService.getFeedbackId(feedbackId);
		FeedbackDTO dto = dtoConvertor.convertTo(savedFeedback);
		return new ResponseEntity<FeedbackDTO>(dto, HttpStatus.OK);

	}
	

	/*
	@PutMapping("/{feedbackId}/hospital/{hospitalId}")
	public ResponseEntity<FeedbackDTO> updateFeedbackByDoctorId( @PathVariable int feedbackId, @PathVariable int doctorId)
	{
	Feedback updatedFeedback = feedbackService.updateFeedbackByDoctorId(feedbackId,doctorId);
	if(updatedFeedback!=null) {
	FeedbackDTO dto = dtoConvertor.convertTo(updatedFeedback);
	return new ResponseEntity<FeedbackDTO>(dto, HttpStatus.OK);
	}
	return null;
	}
	*/
	@PutMapping("/{feedbackId}/hospital/{hospitalId}")
	public ResponseEntity<FeedbackDTO>updateFeedbackByHospitalId(@PathVariable int feedbackId, @PathVariable int hospitalId){
			Feedback updatedFeedback = feedbackService.updateFeedbackByHospitalId(feedbackId, hospitalId);
			if (updatedFeedback != null)
			{
			FeedbackDTO dto = dtoConvertor.convertTo(updatedFeedback);
			return new ResponseEntity<FeedbackDTO>(dto, HttpStatus.OK);
			}
			return null;
			
	}

	@PutMapping("/{feedbackId}/doctor/{doctorId}")
	public ResponseEntity<FeedbackDTO>updateFeedbackByDoctorId(@PathVariable int feedbackId, @PathVariable int doctorId){
			Feedback updatedFeedback = feedbackService.updateFeedbackByDoctorId(feedbackId, doctorId);
			if (updatedFeedback != null)
			{
			FeedbackDTO dto = dtoConvertor.convertTo(updatedFeedback);
			return new ResponseEntity<FeedbackDTO>(dto, HttpStatus.OK);
			}
			return null;
			
	}


	@GetMapping("/doctor/{doctorName}")

	public ResponseEntity<List<FeedbackDTO>> getFeesdbackByDoctorName(@PathVariable String doctorName) {
		List<Feedback> savedFeedback = feedbackService.getFeedbackByDoctorName(doctorName);
		List<FeedbackDTO> dtolist = new ArrayList<>();
		for (Feedback feedback : savedFeedback) {
			FeedbackDTO dto = dtoConvertor.convertTo(feedback);
			dtolist.add(dto);
		}
		return new ResponseEntity<List<FeedbackDTO>>(dtolist, HttpStatus.OK);
	}
	
	@GetMapping("/patient/{patientName}")

	public ResponseEntity<List<FeedbackDTO>> getFeesdbackByPatientName(@PathVariable String patientName) {
		List<Feedback> savedFeedback = feedbackService.getFeedbackByPatientName(patientName);
		List<FeedbackDTO> dtolist = new ArrayList<>();
		for (Feedback feedback : savedFeedback) {
			FeedbackDTO dto = dtoConvertor.convertTo(feedback);
			dtolist.add(dto);
		}
		return new ResponseEntity<List<FeedbackDTO>>(dtolist, HttpStatus.OK);
	}
	
	@GetMapping("/hospital/{hospitalName}")
	public ResponseEntity<List<FeedbackDTO>> getFeedbackByHospitalName(@PathVariable String hospitalName){
		List<Feedback> savedFeedback = feedbackService.getFeedbackByHospitalName(hospitalName);
		List<FeedbackDTO> dtolist = new ArrayList<>();
		for (Feedback feedback : savedFeedback) {
			FeedbackDTO dto = dtoConvertor.convertTo(feedback);
			dtolist.add(dto);
		}
		return new ResponseEntity<List<FeedbackDTO>>(dtolist, HttpStatus.OK);
	}

	
	
	
	/*@GetMapping("/patient/{patientId}")

	public ResponseEntity<List<FeedbackDTO>> getFeedBackByPatientId(@PathVariable int patientId)
			throws NullPointerException {
		List<Feedback> savedFeedback = feedbackService.getFeedbackByPatientId(patientId);
		List<FeedbackDTO> dtolist = new ArrayList<>();
		for (Feedback feedback : savedFeedback) {
			FeedbackDTO dto = dtoConvertor.convertTo(feedback);
			dtolist.add(dto);
		}
		return new ResponseEntity<List<FeedbackDTO>>(dtolist, HttpStatus.OK);
	}*/

	
	/*
	 * 
	 * @PutMapping("/{feedbackId}/patient/{patientId}")
	 * 
	 * 
	 * public ResponseEntity<FeedbackDTO> updateFeedbackByPatientId(@PathVariable
	 * int feedbackId, @PathVariable int patientId) { Feedback updatedFeedback =
	 * feedbackService.updateFeedbackByPatientId(feedbackId, patientId);
	 * 
	 * if(updatedFeedback !=null) {
	 * 
	 * FeedbackDTO dto = dtoConvertor.convertTo(updatedFeedback); return new
	 * ResponseEntity<FeedbackDTO>(dto, HttpStatus.OK); }
	 * 
	 * return null;
	 * 
	 * }
	 */

	/*
	 * public String updateFeedbackByPatientId(@PathVariable int
	 * feedbackId, @PathVariable int patientId) { Feedback updatedFeedback =
	 * feedbackService.updateFeedbackByPatientId(feedbackId, patientId);
	 * if(updatedFeedback.getFeedbackComment()!=null) { return
	 * updatedFeedback.toString(); } else return
	 * "error :- "+updatedFeedback.toString()+" "; }
	 */

	/*
	 * @PutMapping("/{feedbackId}") public Feedback updateFeedback (@PathVariable
	 * int feedbackId) {
	 * 
	 * Feedback updatedFeedback = feedbackService.getFeedbackId(feedbackId); return
	 * updatedFeedback;
	 * 
	 * }
	 */

	/*
	 * @DeleteMapping("/deletePatient/{feedbackComment}") public void
	 * removePatient(@PathVariable String feedbackComment) {
	 * feedbackService.removePatientDetailsByfeedbackComment(feedbackComment); }
	 * 
	 */
}
