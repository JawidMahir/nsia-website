import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccraComponent } from './accra.component';

describe('AccraComponent', () => {
  let component: AccraComponent;
  let fixture: ComponentFixture<AccraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
