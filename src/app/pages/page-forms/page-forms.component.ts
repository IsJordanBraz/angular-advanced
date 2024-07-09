import { Component } from '@angular/core';
import { PrimeiroFormComponent } from './primeiro-form/primeiro-form.component';
import { SegundoFormComponent } from './segundo-form/segundo-form.component';

@Component({
  selector: 'app-page-forms',
  standalone: true,
  imports: [PrimeiroFormComponent, SegundoFormComponent],
  templateUrl: './page-forms.component.html',
  styleUrl: './page-forms.component.scss',
})
export class PageFormsComponent {}
