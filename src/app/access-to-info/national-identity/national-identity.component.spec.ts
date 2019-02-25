import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalIdentityComponent } from './national-identity.component';

describe('NationalIdentityComponent', () => {
  let component: NationalIdentityComponent;
  let fixture: ComponentFixture<NationalIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
