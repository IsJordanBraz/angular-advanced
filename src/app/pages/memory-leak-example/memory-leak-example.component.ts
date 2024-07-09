import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { AppDetail2Component } from './app-detail-2/app-detail-2.component';
import { AppDetail3Component } from './app-detail-3/app-detail-3.component';
import { AppDetail4Component } from './app-detail-4/app-detail-4.component';

@Component({
  selector: 'app-memory-leak-example',
  standalone: true,
  imports: [
    AppDetailComponent,
    AppDetail2Component,
    AppDetail3Component,
    AppDetail4Component,
  ],
  templateUrl: './memory-leak-example.component.html',
  styleUrl: './memory-leak-example.component.scss',
})
export class MemoryLeakExampleComponent {
  start = false;
}
