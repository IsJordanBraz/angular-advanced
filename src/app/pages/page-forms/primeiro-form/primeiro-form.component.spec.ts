import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroFormComponent } from './primeiro-form.component';

describe('PrimeiroFormComponent', () => {
  let component: PrimeiroFormComponent;
  let fixture: ComponentFixture<PrimeiroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
