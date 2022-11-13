import { Component, OnInit } from '@angular/core';
import {RecordsService} from "../../../services/records.service";
import {IRecord} from "../../../models/records";
import {ActivatedRoute} from "@angular/router";
import {trimRecordType} from "../../../utils/utils";

@Component({
  selector: 'app-navigator-page',
  templateUrl: './navigator-page.component.html',
  styleUrls: ['./navigator-page.component.scss']
})
export class NavigatorPageComponent implements OnInit {
  public records: IRecord[]

  constructor(private recordsService:RecordsService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((x) => {
        if(x['tab']){
          this.records = this.recordsService.getRecordsByType(trimRecordType(x['tab']))
        } else {
          this.records = this.recordsService.getRecordsByType('income')
        }
    });
  }

}
