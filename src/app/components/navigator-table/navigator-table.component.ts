import {Component, OnInit} from '@angular/core';
import {IRecord} from "../../../models/records";
import {RecordsService} from "../../../services/records.service";
import {ActivatedRoute} from "@angular/router";
import {trimRecordType} from "../../../utils/utils";
import {tabs} from "../../../constants/tabs";

@Component({
  selector: 'app-navigator-table',
  templateUrl: './navigator-table.component.html',
  styleUrls: ['./navigator-table.component.scss']
})
export class NavigatorTableComponent implements OnInit {
  records: IRecord[];
  tabs: string[];

  constructor(private recordsService:RecordsService, private router:ActivatedRoute) {
  this.tabs = tabs;
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe((x) => {
      if(x['tab']){
        this.records = this.recordsService.getRecordsByType(trimRecordType(tabs[x['tab']]))
      } else {
        this.records = this.recordsService.getRecordsByType('income')
      }
    });
  }
}
