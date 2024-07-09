import { Component, OnDestroy } from '@angular/core';
import {
  AppWidgetComponent,
  WidgetContentDirective,
  WidgetFooterDirective,
} from './app-widget/app-widget.component';
import { WidgetContentComponent } from './widget-content/widget-content.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [
    AppWidgetComponent,
    WidgetFooterDirective,
    WidgetContentComponent,
    WidgetContentDirective,
    WeatherComponent,
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
})
export class ContentProjectionComponent {}
