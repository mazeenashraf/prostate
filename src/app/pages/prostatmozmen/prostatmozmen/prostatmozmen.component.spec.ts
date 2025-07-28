import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstatmozmenComponent } from './prostatmozmen.component';

describe('ProstatmozmenComponent', () => {
  let component: ProstatmozmenComponent;
  let fixture: ComponentFixture<ProstatmozmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProstatmozmenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProstatmozmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
