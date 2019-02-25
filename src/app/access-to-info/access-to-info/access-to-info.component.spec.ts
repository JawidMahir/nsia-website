import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessToInfoComponent } from './access-to-info.component';

describe('AccessToInfoComponent', () => {
  let component: AccessToInfoComponent;
  let fixture: ComponentFixture<AccessToInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessToInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessToInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
