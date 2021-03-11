import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDetalComponent } from './graphic-detal.component';

describe('GraphicDetalComponent', () => {
  let component: GraphicDetalComponent;
  let fixture: ComponentFixture<GraphicDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
