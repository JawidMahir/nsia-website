import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesHomeComponent } from './opportunities-home.component';

describe('OpportunitiesHomeComponent', () => {
  let component: OpportunitiesHomeComponent;
  let fixture: ComponentFixture<OpportunitiesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
