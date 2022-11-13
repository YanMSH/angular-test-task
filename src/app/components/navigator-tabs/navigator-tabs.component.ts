import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {tabs} from "../../../constants/tabs";

@Component({
  selector: 'app-navigator-tabs',
  templateUrl: './navigator-tabs.component.html',
  styleUrls: ['./navigator-tabs.component.scss']
})
export class NavigatorTabsComponent implements OnInit {
  currentTab: string;
  tabs: string[];
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    this.tabs = tabs;
  }

  goToTab(tabName: string){
    this.router.navigate(['/navigator'], {queryParams:{tab:this.tabs.indexOf(tabName)}})
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(x => this.currentTab = this.tabs[x['tab']] || 'income')
  }

}
