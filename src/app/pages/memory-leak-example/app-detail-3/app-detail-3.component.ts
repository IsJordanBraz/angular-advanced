import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app-detail-3',
  standalone: true,
  imports: [],
  templateUrl: './app-detail-3.component.html',
  styleUrl: './app-detail-3.component.scss',
})
export class AppDetail3Component implements OnInit {
  tick = 0;
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((mySub) => {
        this.tick += 1;
        console.log(mySub);
      });
  }
}
