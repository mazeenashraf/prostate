import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SartanprostatComponent } from './sartanprostat.component';

describe('SartanprostatComponent', () => {
  let component: SartanprostatComponent;
  let fixture: ComponentFixture<SartanprostatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SartanprostatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SartanprostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
