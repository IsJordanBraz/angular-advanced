import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormsComponent } from './page-forms.component';

describe('PageFormsComponent', () => {
  let component: PageFormsComponent;
  let fixture: ComponentFixture<PageFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
