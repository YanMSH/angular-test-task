import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorTabsComponent } from './navigator-tabs.component';

describe('NavigatorTabsComponent', () => {
  let component: NavigatorTabsComponent;
  let fixture: ComponentFixture<NavigatorTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
