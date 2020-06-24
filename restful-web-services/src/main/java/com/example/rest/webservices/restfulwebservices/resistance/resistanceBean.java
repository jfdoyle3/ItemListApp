package com.example.rest.webservices.restfulwebservices.resistance;

public class resistanceBean {

	private String message;

	public resistanceBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "resistanceBean [message=" + message + "]";
	}

}
