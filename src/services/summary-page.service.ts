import {Injectable} from "@angular/core";
import {IRecord} from "../models/records";
import {records} from "../data/records";

@Injectable({
  providedIn:'root'
})
export class SummaryPageService {
  private records: IRecord[] = records.data;
  getRecords(){
    return this.records
  }
}
