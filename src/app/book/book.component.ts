import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Book} from "./model/book";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  formBook!: FormGroup;
  constructor(private bookService: BookService, private http: HttpClient, private router: Router) { }

  book: Book = new Book(0, "", "", "")
  ngOnInit(): void {
    this.formBook = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl(""),
    })
    this.findAll()
  }
  findAll() {
    this.bookService.findAll().subscribe(data => {
      this.books = data
    })
  }

  showEdit(book: Book) {
    this.bookService.findByID(book.id).subscribe(data => {
      this.book = data
    })
  }


  delete(id: number) {
    let confirms = confirm("Delete confirm")
    if (confirms) {
      this.bookService.deleteBook(id).subscribe(() => {
        alert("deleteSc");
        this.findAll()
      })

    } else {
      this.findAll()
    }
  }


  detail(id: number) {
    this.bookService.findByID(this.book.id).subscribe(data => {
      this.book = data
    })
  }


}
