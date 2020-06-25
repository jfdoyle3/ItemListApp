package com.example.rest.webservices.restfulwebservices.itemlist;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ItemListResource {

	@Autowired
	private ItemListHardcodedService itemListService;
	
 	@GetMapping("/users/{username}/itemlist")
	public List<ItemList> getAllItems(@PathVariable String username){
 	//	Thread.sleep(3000);
		return itemListService.findAll();
	}
}
