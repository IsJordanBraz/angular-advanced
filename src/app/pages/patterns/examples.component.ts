import { Component } from '@angular/core';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { VelocityWidgetComponent } from './velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [
    CardWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}
