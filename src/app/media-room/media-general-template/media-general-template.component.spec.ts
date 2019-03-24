import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGeneralTemplateComponent } from './media-general-template.component';

describe('MediaGeneralTemplateComponent', () => {
  let component: MediaGeneralTemplateComponent;
  let fixture: ComponentFixture<MediaGeneralTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaGeneralTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaGeneralTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
