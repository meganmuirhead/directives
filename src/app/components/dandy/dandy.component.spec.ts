import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DandyComponent } from './dandy.component';

describe('DandyComponent', () => {
  let component: DandyComponent;
  let fixture: ComponentFixture<DandyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DandyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
