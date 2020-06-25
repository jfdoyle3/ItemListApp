package com.example.rest.webservices.restfulwebservices.itemlist;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ItemListHardcodedService {

	private static List<ItemList> items = new ArrayList<>();
	private static int idCounter = 0;

	static {
		items.add(new ItemList(++idCounter, "First Item", "Learn about Java", new Date(), false));
		items.add(new ItemList(++idCounter, "Second Item", "Learn about Microservices", new Date(), false));
		items.add(new ItemList(++idCounter, "Third Item", "Learn about react", new Date(), false));
	}

	public List<ItemList> findAll() {
		return items;
	}
	
	
}
