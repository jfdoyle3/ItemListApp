package com.example.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
// front-end server: http://localhost:4200  <-- should use that port for projects.
// To Fix CORS (Cross-Origin Resource Sharing) errors use:
@CrossOrigin
// alternative @CrossOrigin (origins="http://localhost:4200")
public class ResistanceController {

	// GET
	// URI - /resistance
	// Both Method 1 and 2 return a message to the page.
	// method - "Resistance is Futile!"
	// method 1: @RequestMapping(method=RequestMethod.GET, path="/resistance")
	// method 2: shorter, results the same output as method 1.
	@GetMapping(path = "/resistance")
	public String resistance() {
		return "Resistance is Futile!";
	}

	// this returns a JSON response to the page.
	// resistance - bean
	@GetMapping(path = "/resistance-bean")
	public resistanceBean resistanceBean() {
		return new resistanceBean("Resistance is Futile!");
	}

	// this returns a JSON response to the page.
	// resistance/path-variable/{name}  where {name} is the pass thru variable from the class/code.
	@GetMapping(path = "/resistance/path-variable/{name}")
	public resistanceBean resistancePathVariable(@PathVariable String name) {
		return new resistanceBean(String.format("Resistance is Futile! , %s",name));
	}
	
}
