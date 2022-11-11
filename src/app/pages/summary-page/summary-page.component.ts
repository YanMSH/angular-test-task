import {Component, OnInit} from '@angular/core';
import { IFilteredRecords, IRecord} from "../../../models/records";
import {SummaryPageService} from "../../../services/summary-page.service";



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
  Object = Object;
  constructor(public summaryPageService:SummaryPageService) { }

  ngOnInit(): void {
    const recordsData = this.summaryPageService.getRecords();
    this.incomeRecordsData = recordsData.filter((record) => {return record.type === 'income'})
    this.outcomeRecordsData = recordsData.filter((record) => {return record.type === 'outcome'})
    this.loanRecordsData = recordsData.filter((record) => {return record.type === 'loan'})
    this.investmentsRecordsData = recordsData.filter((record) => {return record.type === 'investment'})
    this.recordsDataOfType = {
      income: this.incomeRecordsData,
      outcome: this.outcomeRecordsData,
      loans: this.loanRecordsData,
      investments: this.investmentsRecordsData,
    }
    this.recordsData = recordsData;
  }

}
