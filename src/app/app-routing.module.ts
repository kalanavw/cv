import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KalanavwComponent} from "./components/kalanavw/kalanavw.component";

const routes: Routes = [
  {
    path: '',
    component: KalanavwComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
