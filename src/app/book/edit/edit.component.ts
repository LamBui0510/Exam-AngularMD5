import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit!: FormGroup;
  book!: Book;
  id: any
  constructor(private http: HttpClient, private bookService: BookService,  private router: Router, private activaterouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl("")
    })
    this.activaterouter.params.subscribe((data)=>{
      this.id = data['id']
      this.showEdit()
    })
  }
  showEdit() {
    this.bookService.findByID(this.id).subscribe(data => {
      this.book = data,
        this.formEdit.get('id')?.setValue(this.book.id)
      this.formEdit.get('title')?.setValue(this.book.title)
      this.formEdit.get('author')?.setValue(this.book.author)
      this.formEdit.get('description')?.setValue(this.book.description)
    })
  }
  saveEdit() {
    console.log("save")
    this.bookService.edit(this.formEdit.value).subscribe(() => {
      alert("edit succeed");
      this.router.navigate(['/book']);
    });
  }
  }


