import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalMaterialsComponent } from './promotional-materials.component';

describe('PromotionalMaterialsComponent', () => {
  let component: PromotionalMaterialsComponent;
  let fixture: ComponentFixture<PromotionalMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionalMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
