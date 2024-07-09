import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-app-detail',
  standalone: true,
  imports: [],
  templateUrl: './app-detail.component.html',
  styleUrl: './app-detail.component.scss',
})
export class AppDetailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  tick = 0;

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((mySub) => {
      this.tick += 1;
      console.log(mySub);
    });
  }
}
