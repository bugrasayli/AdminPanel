import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddisksComponent } from './harddisks.component';

describe('HarddisksComponent', () => {
  let component: HarddisksComponent;
  let fixture: ComponentFixture<HarddisksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarddisksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarddisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
