package com.nv.doctorapp.exception;

public class InvalidPatientException extends Exception{

	String input;
	String msg;

	public InvalidPatientException(String input, String msg) {
		super();
		this.input = input;
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "InvalidInputException [" + input + msg + "]";
	}
}