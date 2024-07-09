import { AfterContentInit, Component, ContentChild } from '@angular/core';
import {
  LibHeaderComponent,
  LibHeaderToken,
} from '../lib-header/lib-header.component';

@Component({
  selector: 'app-lib-card',
  standalone: true,
  imports: [],
  templateUrl: './lib-card.component.html',
  styleUrl: './lib-card.component.scss',
})
export class LibCardComponent implements AfterContentInit {
  @ContentChild(LibHeaderToken) header: LibHeaderToken | null = null;

  ngAfterContentInit(): void {
    if (this.header !== null) {
      this.header?.doSomething();
    }
  }
}
