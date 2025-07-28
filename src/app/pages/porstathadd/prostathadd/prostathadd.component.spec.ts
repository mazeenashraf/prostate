import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstathaddComponent } from './prostathadd.component';

describe('ProstathaddComponent', () => {
  let component: ProstathaddComponent;
  let fixture: ComponentFixture<ProstathaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProstathaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProstathaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
