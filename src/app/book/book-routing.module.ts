import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";
import {BookComponent} from "./book.component";

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'book', component: BookComponent},
  {path: '', component: BookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
