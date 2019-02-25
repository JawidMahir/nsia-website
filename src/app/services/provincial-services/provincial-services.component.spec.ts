import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialServicesComponent } from './provincial-services.component';

describe('ProvincialServicesComponent', () => {
  let component: ProvincialServicesComponent;
  let fixture: ComponentFixture<ProvincialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
