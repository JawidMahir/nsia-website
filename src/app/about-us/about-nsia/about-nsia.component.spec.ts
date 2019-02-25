import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNsiaComponent } from './about-nsia.component';

describe('AboutNsiaComponent', () => {
  let component: AboutNsiaComponent;
  let fixture: ComponentFixture<AboutNsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
