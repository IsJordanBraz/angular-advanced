import {
  AfterViewInit,
  Component,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements AfterViewInit {
  hidden = signal(true);

  container = viewChild('customContainer', { read: ViewContainerRef });
  header = viewChild<TemplateRef<any>>('defaultWidgetHeader');

  ngAfterViewInit(): void {
    const header = this.header();
    if (header) {
      this.container()?.createEmbeddedView(header);
    }
  }
}
