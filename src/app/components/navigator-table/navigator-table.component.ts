import { Component, OnInit } from '@angular/core';
import {records} from "../../../data/records";
import {NavigatorPageService} from "../../../services/navigator-page.service";

@Component({
  selector: 'app-navigator-table',
  templateUrl: './navigator-table.component.html',
  styleUrls: ['./navigator-table.component.scss']
})
export class NavigatorTableComponent implements OnInit {

  constructor(public navigatorPageService:NavigatorPageService) { }
  records = records.data;
  ngOnInit(): void {
    console.log(this.navigatorPageService.currentTab$.getValue())
  }

}
