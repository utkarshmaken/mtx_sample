package com.example.todoapp.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.todoapp.models.Book;
import com.example.todoapp.repositories.BookRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class BookController {

	@Autowired
	BookRepository bookRepository;



	@GetMapping("/book")
	public List<Book> getAllBooks() {
		List<Book> result =  bookRepository.findAll();
		return result;
	}

    	@GetMapping("/book/{title}")
    	public ResponseEntity<Book> getBookByTitle(@PathVariable("title") String title) {
        Book book = bookRepository.findByTitle(title);
		if(book == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(book, HttpStatus.OK);
    	}

    	@GetMapping("/book/{city}")
    	public ResponseEntity<List<Book>> getBookByCity(@PathVariable("city") String city) {
        	List<Book> result =  bookRepository.findByCity(city);
		if(result == null || result.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(result, HttpStatus.OK);
    	}

	@GetMapping("/book/{author}")
	public ResponseEntity<List<Book>> getBookByAuthor(@PathVariable("author") String author) {
		List<Book> result =  bookRepository.findByAuthor(author);
			if(result == null || result.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			return new ResponseEntity<>(result, HttpStatus.OK);
	    }


	@PostMapping("/book")
	public Book createBook(@Valid @RequestBody Book book) {
		return bookRepository.save(book);
	}

	/*@PutMapping("/book/{title}")
  	public ResponseEntity<Book> updateBook(@PathVariable("title") String title, @RequestBody Book book) {
    	Book bookData = bookRepository.findBytitle(title);

		if (bookData != null) {
			bookData.setTitle(book.getTitle());
			bookData.setAuthor(book.getAuthor());
			bookData.setCity(book.getCity());
			return new ResponseEntity<>(BookRepository.save(bookData), HttpStatus.OK);
		} 
		else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    } */

}
