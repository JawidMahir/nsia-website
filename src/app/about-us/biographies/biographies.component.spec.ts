import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographiesComponent } from './biographies.component';

describe('BiographiesComponent', () => {
  let component: BiographiesComponent;
  let fixture: ComponentFixture<BiographiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
