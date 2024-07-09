import { JsonPipe, KeyValuePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import * as CUSTOM_SEGUNDO from './formTeste.json';
import { MyFormSegundo } from './form.interface';

@Component({
  selector: 'input[customInput]',
  standalone: true,
  imports: [],
  template: ``,
  styleUrl: './segundo-form.component.scss',
})
export class customInput {}

@Component({
  selector: 'app-segundo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, KeyValuePipe, JsonPipe],
  templateUrl: './segundo-form.component.html',
  styleUrl: './segundo-form.component.scss',
})
export class SegundoFormComponent {
  custom1: MyFormSegundo = CUSTOM_SEGUNDO;
  form = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    for (const [key, control] of Object.entries(this.custom1.controls)) {
      const validators = [];
      for (const [chave, valor] of Object.entries(control.validators)) {
        switch (chave) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'minLength':
            validators.push(Validators.minLength(valor as number));
            break;
          default:
            break;
        }
      }
      this.form.addControl(key, this.formBuilder.control('', validators));
    }
  }

  getIsRequired(controlName: string): boolean {
    return (
      this.form.get(controlName)?.hasValidator(Validators.required) || false
    );
  }
}
