import { Component } from '@angular/core';
import {records} from "../data/records";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-task';
  public recordsData = records.data;
  // public incomeRecordsData = this.recordsData.filter((record) => {return record.type === 'income'})
  // public outcomeRecordsData = this.recordsData.filter((record) => {return record.type === 'outcome'})
  // public loanRecordsData = this.recordsData.filter((record) => {return record.type === 'loan'})
  // public investmentsRecordsData = this.recordsData.filter((record) => {return record.type === 'investment'})
}
