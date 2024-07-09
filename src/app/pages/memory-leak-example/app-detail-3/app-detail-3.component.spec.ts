import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetail3Component } from './app-detail-3.component';

describe('AppDetail3Component', () => {
  let component: AppDetail3Component;
  let fixture: ComponentFixture<AppDetail3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetail3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
