import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaRoomHomeComponent } from './media-room-home.component';

describe('MediaRoomHomeComponent', () => {
  let component: MediaRoomHomeComponent;
  let fixture: ComponentFixture<MediaRoomHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaRoomHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaRoomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
