import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightweightInjectionTokensComponent } from './lightweight-injection-tokens.component';

describe('LightweightInjectionTokensComponent', () => {
  let component: LightweightInjectionTokensComponent;
  let fixture: ComponentFixture<LightweightInjectionTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightweightInjectionTokensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightweightInjectionTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
