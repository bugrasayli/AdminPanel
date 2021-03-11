import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCpuComponent } from './insert-cpu.component';

describe('InsertCpuComponent', () => {
  let component: InsertCpuComponent;
  let fixture: ComponentFixture<InsertCpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
