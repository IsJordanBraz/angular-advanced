import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExperimentalLoggerService } from './services/experimental-logger.service';

@Component({
  selector: 'app-dependency-providers',
  standalone: true,
  templateUrl: './dependency-providers.component.html',
  styleUrl: './dependency-providers.component.scss',
  providers: [
    {
      provide: LoggerService,
      useClass: ExperimentalLoggerService,
    },
  ],
  imports: [],
})
export class DependencyProvidersComponent implements OnInit {
  readonly #logger = inject(LoggerService);

  ngOnInit(): void {
    this.#logger.log('DependencyProvidersComponent');
  }
}
