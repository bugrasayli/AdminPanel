import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertHarddiskComponent } from './insert-harddisk.component';

describe('InsertHarddiskComponent', () => {
  let component: InsertHarddiskComponent;
  let fixture: ComponentFixture<InsertHarddiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertHarddiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertHarddiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
