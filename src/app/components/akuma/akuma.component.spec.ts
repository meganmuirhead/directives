import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkumaComponent } from './akuma.component';

describe('AkumaComponent', () => {
  let component: AkumaComponent;
  let fixture: ComponentFixture<AkumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
