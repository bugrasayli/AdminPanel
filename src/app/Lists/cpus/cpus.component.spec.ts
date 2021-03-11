import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPUsComponent } from './cpus.component';

describe('CPUsComponent', () => {
  let component: CPUsComponent;
  let fixture: ComponentFixture<CPUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
