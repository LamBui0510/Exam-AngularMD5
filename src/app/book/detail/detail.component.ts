import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  formDetail!: FormGroup
  id: any
  book: Book=new Book(0,"","","")
  constructor(private http: HttpClient, private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.formDetail = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl("")
    })
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id']
      this.showDetail()
    })
  }

  showDetail() {
    this.bookService.findByID(this.id).subscribe(data => {
      this.book = data
    })
  }

}
