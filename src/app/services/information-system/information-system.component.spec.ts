import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSystemComponent } from './information-system.component';

describe('InformationSystemComponent', () => {
  let component: InformationSystemComponent;
  let fixture: ComponentFixture<InformationSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
