import {Injectable} from "@angular/core";
import {IRecord} from "../models/records";
import {records} from "../data/records";

@Injectable({
  providedIn:'root'
})
export class RecordsService {
  private records: IRecord[] = records.data;
  getRecords(){
    return this.records
  }
  getRecordsByType(type: string){
    return this.records.filter(record => {return record.type === type})
  }
}
