import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElthabComponent } from './elthab.component';

describe('ElthabComponent', () => {
  let component: ElthabComponent;
  let fixture: ComponentFixture<ElthabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElthabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElthabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
