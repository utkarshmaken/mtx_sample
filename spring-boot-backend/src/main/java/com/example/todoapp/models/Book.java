package com.example.todoapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;


@Document(collection = "books")
public class Book
{
    @Id
    private String id;

    @NotBlank
    @Indexed(unique=true)
    private String title;

    private String author;
    private String city;

    public Book() {
        super();
    }

    public Book(String title, String author, String city) {
        this.title = title;
        this.author = author;
        this.city = city;
    }

    public String getId () {
        return id;
    }

    public void setId (String id) {
        this.id = id;
    }

    public String getTitle () {
        return title;
    }

    public void setTitle (String title) {
        this.title = title;
    }

    public String getAuthor () {
        return author;
    }

    public void setAuthor (String author) {
        this.author = author;
    }

    public String getCity () {
        return city;
    }

    public void setCity (String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return String.format(
                "Book[id=%s, title='%s', author='%s', city='%s']",
                id, title, author, city);
    }

}
