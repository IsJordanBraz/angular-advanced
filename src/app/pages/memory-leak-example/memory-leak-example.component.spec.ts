import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeakExampleComponent } from './memory-leak-example.component';

describe('MemoryLeakExampleComponent', () => {
  let component: MemoryLeakExampleComponent;
  let fixture: ComponentFixture<MemoryLeakExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryLeakExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryLeakExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
