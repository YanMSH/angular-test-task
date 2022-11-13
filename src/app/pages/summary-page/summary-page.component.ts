import {Component, OnInit} from '@angular/core';
import { IFilteredRecords, IRecord} from "../../../models/records";
import {RecordsService} from "../../../services/records.service";
import {trimRecordType} from "../../../utils/utils";
import {tabs} from "../../../constants/tabs";


@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  public recordsData: IRecord[];
  private incomeRecordsData: IRecord[];
  private outcomeRecordsData: IRecord[];
  private loanRecordsData: IRecord[];
  private investmentsRecordsData: IRecord[];
  public recordsDataOfType: IFilteredRecords;
  tabs: string[];
  Object = Object;
  constructor(public recordsService:RecordsService) {
    this.tabs = tabs;
  }

  public getAmountOfRecords(recordType: string){
    return this.recordsService.getRecordsByType(trimRecordType(recordType)).length
  }
  ngOnInit(): void {
    const recordsData = this.recordsService.getRecords();
    this.incomeRecordsData = this.recordsService.getRecordsByType('income');
    this.outcomeRecordsData = this.recordsService.getRecordsByType('outcome');
    this.loanRecordsData = this.recordsService.getRecordsByType('loan');
    this.investmentsRecordsData = this.recordsService.getRecordsByType('investment');
    this.recordsDataOfType = {
      income: this.incomeRecordsData,
      outcome: this.outcomeRecordsData,
      loans: this.loanRecordsData,
      investments: this.investmentsRecordsData,
    }
    this.recordsData = recordsData;
  }

}
