import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SslIdentyComponent} from "./pages/ssl-identy/ssl-identy.component";
import {SslAppsComponent} from "./pages/ssl-apps/ssl-apps.component";
import {SslDataComponent} from "./pages/ssl-data/ssl-data.component";
import {SslDialogBoardComponent} from "./pages/ssl-dialog-board/ssl-dialog-board.component";
import {SslDialogManageComponent} from "./pages/ssl-dialog-manage/ssl-dialog-manage.component";
import {SslDialogExportComponent} from "./pages/ssl-dialog-export/ssl-dialog-export.component";
import {TestTableComponent} from "./pages/test-table/test-table.component";
import {NewsDetailsComponent} from "./news-pages/news-home/news-details/news-details.component";
import {NewsHomeComponent} from "./news-pages/news-home/news-home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'NewHome',
    pathMatch: 'full'
  },
  { path: 'identy', component: SslIdentyComponent},
  { path: 'apps', component: SslAppsComponent},
    //SslDataComponent
  { path: 'data', component: TestTableComponent},
  { path: 'dialog/board', component: SslDialogBoardComponent},
  { path: 'dialog/manage', component: SslDialogManageComponent},
  { path: 'dialog/export', component: SslDialogExportComponent},
  { path: 'settings', component: HomeComponent},
  { path:'news_details',component:NewsDetailsComponent},
  { path:'NewHome',component:NewsHomeComponent},
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
