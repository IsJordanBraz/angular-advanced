import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { startWith, tap } from 'rxjs';

@Component({
  selector: 'app-primeiro-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './primeiro-form.component.html',
  styleUrl: './primeiro-form.component.scss',
})
export class PrimeiroFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  destroyRef = inject(DestroyRef);

  form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    nickName: [''],
  });

  ngOnInit(): void {
    this.form.controls.lastName.valueChanges
      .pipe(
        tap(() => this.form.controls.nickName.markAsDirty()),
        startWith(this.form.controls.lastName.value),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((lastName) => {
        this.isBraz(lastName || '')
          ? this.form.controls.nickName.addValidators(Validators.required)
          : this.form.controls.nickName.removeValidators(Validators.required);
        this.form.controls.nickName.updateValueAndValidity();
      });
  }

  showInvalidForm(field: string): boolean {
    if (this.form.get(field)?.valid) return false;
    // @ts-ignore
    return this.form.get(field)?.dirty || this.form.get(field)?.touched;
  }

  private isBraz(value: string): boolean {
    return !value.includes('braz');
  }
}
