import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { SettingsService } from 'src/app/services/settings-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnDestroy {
  @ViewChild('form') form: NgForm;
  countryList$ = this.settingsService.countryList$;
  languageList$ = this.settingsService.languageList$;
  notifier = new Subject<void>();

  accountForm = this.fb.group({
    name: ['', [Validators.required]],
    username: [''],
    title: [''],
    company: [''],
    about: [''],
    email: ['', [Validators.email]],
    phone: ['', [Validators.pattern('^[0-9]*$')]],
    country: ['India'],
    language: ['English'],
  });
  initialValue = this.accountForm.value;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {}

  resetForm() {
    setTimeout(() => this.form.resetForm(this.initialValue), 200);
  }

  saveForm() {
    this.settingsService
      .saveFormData(this.accountForm.value)
      .pipe(
        takeUntil(this.notifier),
        tap((_) => {
          this.settingsService.openSnackBar('Account Updated Successfully!!');
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
