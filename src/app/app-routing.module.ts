import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: 'detail/:recipeId', component: DetailPageComponent, data: {animation: 'DetailPage'} },
  { path: '', component: DashboardComponent, data: {animation: 'DashboardPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
