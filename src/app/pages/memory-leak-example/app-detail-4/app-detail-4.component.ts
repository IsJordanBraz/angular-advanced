import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { count, interval, Subject, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'app-app-detail-4',
  standalone: true,
  imports: [],
  templateUrl: './app-detail-4.component.html',
  styleUrl: './app-detail-4.component.scss',
})
export class AppDetail4Component implements OnInit {
  tick = 0;
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((mySub) => {
        this.tick += 1;
        console.log(mySub);
      });
    this.secondTickSubject.next(true);
  }

  secondTickSubject = new Subject<Boolean>();
  startSecondTick$ = this.secondTickSubject.asObservable();
  secondTick = 0;

  subscription = this.startSecondTick$
    .pipe(
      switchMap(() => interval(1000)),
      takeUntilDestroyed(),
      toArray()
    )
    .subscribe((mySub) => {
      this.secondTick += 1;
      console.log('second tick: ', mySub);
    });
}
