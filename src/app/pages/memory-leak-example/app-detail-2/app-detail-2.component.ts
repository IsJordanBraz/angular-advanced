import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app-detail-2',
  standalone: true,
  imports: [],
  templateUrl: './app-detail-2.component.html',
  styleUrl: './app-detail-2.component.scss',
})
export class AppDetail2Component implements OnInit {
  tick = 0;
  tick$ = interval(1000).pipe(takeUntilDestroyed());

  ngOnInit(): void {
    this.tick$.subscribe((mySub) => {
      this.tick += 1;
      console.log(mySub);
    });
  }
}
