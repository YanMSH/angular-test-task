import { Component, OnInit } from '@angular/core';
import {NavigatorPageService} from "../../../services/navigator-page.service";

@Component({
  selector: 'app-navigator-tabs',
  templateUrl: './navigator-tabs.component.html',
  styleUrls: ['./navigator-tabs.component.scss']
})
export class NavigatorTabsComponent implements OnInit {

  constructor(public navigatorPageService:NavigatorPageService) { }
  tabs = ['income', 'outcome', 'loan', 'investments'];
  ngOnInit(): void {
  }

}
