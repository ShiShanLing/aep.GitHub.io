import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

import {NewsHomeComponent} from "./news-home/news-home.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  // { path:'news_details',component:NewsHomeComponent}
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsPagesRoutingModule { }
