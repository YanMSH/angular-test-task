import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn:'root'})

export class NavigatorPageService{
  currentTab$ = new BehaviorSubject<string | undefined>(undefined);

  setTab(tab?: string){
    if (tab) {
      this.currentTab$.next(tab);
    }
    else {
      this.currentTab$.next('income')
    }
  }
}
