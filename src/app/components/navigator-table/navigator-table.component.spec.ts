import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorTableComponent } from './navigator-table.component';

describe('NavigatorTableComponent', () => {
  let component: NavigatorTableComponent;
  let fixture: ComponentFixture<NavigatorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
