import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRamComponent } from './insert-ram.component';

describe('InsertRamComponent', () => {
  let component: InsertRamComponent;
  let fixture: ComponentFixture<InsertRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
