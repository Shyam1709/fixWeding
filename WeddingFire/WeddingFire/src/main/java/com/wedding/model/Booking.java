package com.wedding.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Booking {
@Id	
private String Id;
@DBRef
private Venue venueid;

public Venue getVenueid() {
	return venueid;
}
private Date date;
public String getId() {
	return Id;
}
public Booking() {
	
}
public Booking(Venue venueid,Date date) {
this.venueid=venueid;
this.date=date;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
