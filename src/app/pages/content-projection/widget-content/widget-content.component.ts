import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-widget-content',
  standalone: true,
  imports: [],
  templateUrl: './widget-content.component.html',
  styleUrl: './widget-content.component.scss',
})
export class WidgetContentComponent implements OnInit, OnDestroy {
  @Input({ required: true }) title = '';

  subscription!: Subscription;
  tick = 0;

  ngOnInit(): void {
    console.log('Content iniciado: ', this.title);
    this.subscription = interval(1000).subscribe((mySub) => {
      this.tick += 1;
      console.log(mySub);
    });
  }

  ngOnDestroy(): void {
    console.log('Content destruido: ', this.title);
    this.subscription.unsubscribe();
  }
}
