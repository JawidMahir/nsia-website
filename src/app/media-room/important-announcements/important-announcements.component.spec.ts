import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantAnnouncementsComponent } from './important-announcements.component';

describe('ImportantAnnouncementsComponent', () => {
  let component: ImportantAnnouncementsComponent;
  let fixture: ComponentFixture<ImportantAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
