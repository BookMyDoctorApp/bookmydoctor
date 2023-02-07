package com.nv.doctorapp.exception.appointment;

public class InvalidAppointmentException extends Exception{

	String msg;

	

	public InvalidAppointmentException(String string) {
		// TODO Auto-generated constructor stub
	}



	@Override
	public String toString() {
		return "InvalidAppointmentException [msg=" + msg + "]";
	}
	
	


}