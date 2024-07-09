import { Component, contentChild, OnInit } from '@angular/core';
import { WIDGET_TOKEN } from '../widget.interface';

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss',
})
export class CardWrapperComponent implements OnInit {
  content = contentChild(WIDGET_TOKEN);

  ngOnInit(): void {
    this.content()?.load();
  }

  onRefresh(): void {
    this.content()?.refresh();
  }
}
