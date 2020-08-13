import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyCvComponent} from './my-cv/my-cv.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';


const routes: Routes = [
  {path: '', component: MyCvComponent},
  {path: 'kalanavw', component: DetailCvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{useHash: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
