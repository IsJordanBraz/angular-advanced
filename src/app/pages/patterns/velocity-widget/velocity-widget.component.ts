import { Component } from '@angular/core';
import { Widget, WIDGET_TOKEN } from '../widget.interface';

@Component({
  selector: 'app-velocity-widget',
  standalone: true,
  imports: [],
  templateUrl: './velocity-widget.component.html',
  styleUrl: './velocity-widget.component.scss',
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: VelocityWidgetComponent,
    },
  ],
})
export class VelocityWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Loading Velocity');
  }

  refresh() {
    console.log('Refreshing ...');
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2000);
  }
}
