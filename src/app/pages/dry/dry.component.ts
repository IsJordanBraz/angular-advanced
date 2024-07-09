import { Component, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-dry',
  standalone: true,
  imports: [],
  templateUrl: './dry.component.html',
  styleUrl: './dry.component.scss',
})
export class DryComponent {}

export function updateProperty<T, K extends keyof T>(
  sg: WritableSignal<T>,
  prop: K,
  value: T[K]
) {
  sg.update((obj) => ({
    ...obj,
    [prop]: value,
  }));
}
