import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGraphicComponent } from './insert-graphic.component';

describe('InsertGraphicComponent', () => {
  let component: InsertGraphicComponent;
  let fixture: ComponentFixture<InsertGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
