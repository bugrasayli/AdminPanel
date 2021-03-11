import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTypeComponent } from './insert-type.component';

describe('InsertTypeComponent', () => {
  let component: InsertTypeComponent;
  let fixture: ComponentFixture<InsertTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
