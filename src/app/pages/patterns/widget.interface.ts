import { InjectionToken } from '@angular/core';

export const WIDGET_TOKEN = new InjectionToken<Widget>('WIDGET');

export interface Widget {
  load: () => void;
  refresh: () => void;
}
