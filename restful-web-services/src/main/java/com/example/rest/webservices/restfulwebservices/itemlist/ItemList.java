package com.example.rest.webservices.restfulwebservices.itemlist;

import java.util.Date;

public class ItemList {

	private long id;
	private String username;
	private String description;
	private Date targetDate;
	private Boolean isdone;
		
	public ItemList(long id, String username, String description, Date targetDate, Boolean isdone) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isdone = isdone;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getdescription() {
		return description;
	}
	public void setdescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public Boolean isdone() {
		return isdone;
	}
	public void setisdone(Boolean isdone) {
		this.isdone = isdone;
	}
	
	
	
	@Override
	public String toString() {
		return "ItemList [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
				+ targetDate + ", isdone=" + isdone + "]";
	}
	
}

