import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanserComponent } from './canser.component';

describe('CanserComponent', () => {
  let component: CanserComponent;
  let fixture: ComponentFixture<CanserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
