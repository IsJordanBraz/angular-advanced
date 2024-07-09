import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  contentChild,
  Directive,
  inject,
  signal,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appWidgetFooter]',
  standalone: true,
})
export class WidgetFooterDirective {
  tpl = inject(TemplateRef);
}

@Directive({
  selector: '[appWidgetContent]',
  standalone: true,
})
export class WidgetContentDirective {
  tpl = inject(TemplateRef);
}

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './app-widget.component.html',
  styleUrl: './app-widget.component.scss',
})
export class AppWidgetComponent {
  hidden = signal(true);
  footer = contentChild(WidgetFooterDirective);
  content = contentChild(WidgetContentDirective);
}
