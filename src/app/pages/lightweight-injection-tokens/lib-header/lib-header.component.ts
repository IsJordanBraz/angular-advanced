import { Component } from '@angular/core';

export abstract class LibHeaderToken {
  abstract doSomething(): void;
}

@Component({
  selector: 'app-lib-header',
  standalone: true,
  imports: [],
  templateUrl: './lib-header.component.html',
  styleUrl: './lib-header.component.scss',
  providers: [{ provide: LibHeaderToken, useExisting: LibHeaderComponent }],
})
export class LibHeaderComponent extends LibHeaderToken {
  doSomething(): void {
    console.log('doSomething....');
  }
}
