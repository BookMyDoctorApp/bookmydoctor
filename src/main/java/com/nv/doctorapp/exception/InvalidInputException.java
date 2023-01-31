package com.nv.doctorapp.exception;

public class InvalidInputException extends Exception{

	String input;
	String msg;

	public InvalidInputException(String input, String msg) {
		super();
		this.input = input;
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "InvalidInputException [" + input + msg + "]";
	}
}