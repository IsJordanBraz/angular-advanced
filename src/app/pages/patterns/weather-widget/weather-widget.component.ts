import { Component } from '@angular/core';
import { Widget, WIDGET_TOKEN } from '../widget.interface';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Loading Wether');
  }

  refresh() {
    console.log('Refreshing ...');
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2000);
  }
}
