import { Component } from '@angular/core';
import { LibCardComponent } from './lib-card/lib-card.component';
import { LibHeaderComponent } from './lib-header/lib-header.component';

@Component({
  selector: 'app-lightweight-injection-tokens',
  standalone: true,
  imports: [LibCardComponent, LibHeaderComponent],
  templateUrl: './lightweight-injection-tokens.component.html',
  styleUrl: './lightweight-injection-tokens.component.scss',
})
export class LightweightInjectionTokensComponent {}
