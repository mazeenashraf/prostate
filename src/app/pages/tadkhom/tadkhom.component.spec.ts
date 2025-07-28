import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadkhomComponent } from './tadkhom.component';

describe('TadkhomComponent', () => {
  let component: TadkhomComponent;
  let fixture: ComponentFixture<TadkhomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TadkhomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TadkhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
