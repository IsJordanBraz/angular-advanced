import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetail2Component } from './app-detail-2.component';

describe('AppDetail2Component', () => {
  let component: AppDetail2Component;
  let fixture: ComponentFixture<AppDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetail2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
