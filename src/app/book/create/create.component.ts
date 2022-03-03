import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formCreate!: FormGroup;
  constructor(private http: HttpClient, private bookService: BookService,  private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl("")
    })
  }

  createSubmit() {
    this.bookService.create(this.formCreate.value).subscribe(() => {
      alert("create succeed")
      this.router.navigate(['/book']);
    })

  }


}
