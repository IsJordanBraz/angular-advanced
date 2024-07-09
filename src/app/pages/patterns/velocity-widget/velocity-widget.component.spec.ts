import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityWidgetComponent } from './velocity-widget.component';

describe('VelocityWidgetComponent', () => {
  let component: VelocityWidgetComponent;
  let fixture: ComponentFixture<VelocityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocityWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
