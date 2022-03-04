import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuciferComponent } from './lucifer.component';

describe('LuciferComponent', () => {
  let component: LuciferComponent;
  let fixture: ComponentFixture<LuciferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuciferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuciferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
