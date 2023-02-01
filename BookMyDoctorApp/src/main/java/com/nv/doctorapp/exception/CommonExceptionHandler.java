package com.nv.doctorapp.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.nv.doctorapp.dto.ExceptionDTOResponse;

public class CommonExceptionHandler {
	
	@ExceptionHandler
	
	public ResponseEntity<ExceptionDTOResponse> invalidName(InvalidPatientException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<ExceptionDTOResponse> invalidEmail(InvalidPatientException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}

}
