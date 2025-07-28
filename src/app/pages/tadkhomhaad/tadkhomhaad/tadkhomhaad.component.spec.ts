import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadkhomhaadComponent } from './tadkhomhaad.component';

describe('TadkhomhaadComponent', () => {
  let component: TadkhomhaadComponent;
  let fixture: ComponentFixture<TadkhomhaadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TadkhomhaadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TadkhomhaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
