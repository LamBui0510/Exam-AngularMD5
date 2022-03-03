import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";

const routes: Routes = [

  { path: '', component: BookComponent },
  { path: 'book', component: BookComponent },
  {
    path: 'lam', loadChildren: ()=> import('./book/book.module').then(module => module.BookModule) //dẫn đến url của child user
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
