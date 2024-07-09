import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetail4Component } from './app-detail-4.component';

describe('AppDetail4Component', () => {
  let component: AppDetail4Component;
  let fixture: ComponentFixture<AppDetail4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetail4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
