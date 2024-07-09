import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoFormComponent } from './segundo-form.component';

describe('SegundoFormComponent', () => {
  let component: SegundoFormComponent;
  let fixture: ComponentFixture<SegundoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
