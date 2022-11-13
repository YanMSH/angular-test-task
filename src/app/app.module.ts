import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorTabsComponent } from './components/navigator-tabs/navigator-tabs.component';
import { NavigatorTableComponent } from './components/navigator-table/navigator-table.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { NavigatorPageComponent } from './pages/navigator-page/navigator-page.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorTabsComponent,
    NavigatorTableComponent,
    SummaryPageComponent,
    NavigatorPageComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
