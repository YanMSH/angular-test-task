import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SummaryPageComponent} from "./pages/summary-page/summary-page.component";
import {NavigatorPageComponent} from "./pages/navigator-page/navigator-page.component";

const routes: Routes = [
  {
    path: '',
    component: SummaryPageComponent
  },
  {
    path: 'navigator',
    component: NavigatorPageComponent
  },
  {path: 'navigator?tab=:index', component:NavigatorPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
