import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyProvidersComponent } from './dependency-providers.component';

describe('DependencyProvidersComponent', () => {
  let component: DependencyProvidersComponent;
  let fixture: ComponentFixture<DependencyProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
