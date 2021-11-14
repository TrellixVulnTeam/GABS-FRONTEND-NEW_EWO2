import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalenderComponent } from './my-calender.component';

describe('MyCalenderComponent', () => {
  let component: MyCalenderComponent;
  let fixture: ComponentFixture<MyCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
