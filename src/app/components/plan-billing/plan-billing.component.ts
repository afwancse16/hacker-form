import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';
import { Subject, takeUntil, tap } from 'rxjs';
import { SettingsService } from 'src/app/services/settings-service.service';

@Component({
  selector: 'app-plan-billing',
  templateUrl: './plan-billing.component.html',
  styleUrls: ['./plan-billing.component.scss'],
})
export class PlanBillingComponent implements OnDestroy {
  @ViewChild('form') form: NgForm;
  countryList$ = this.settingsService.countryList$;
  notifier = new Subject<void>();

  planForm = this.fb.group({
    plan: ['TEAM'],
    cardholdername: [''],
    cardnumber: ['', [CreditCardValidators.validateCCNumber]],
    expdate: ['', [CreditCardValidators.validateExpDate]],
    cvv: ['', [Validators.minLength(3), Validators.maxLength(4)]],
    country: ['India'],
    postalcode: [''],
  });
  initialValue = this.planForm.value;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {}

  selectCard(name: string) {
    this.planForm.get('plan')?.setValue(name);
  }

  resetForm() {
    setTimeout(() => this.form.resetForm(this.initialValue), 200);
  }

  saveForm() {
    this.settingsService
      .saveFormData(this.planForm.value)
      .pipe(
        takeUntil(this.notifier),
        tap((_) => {
          this.settingsService.openSnackBar(
            'Plan & Billing Updated Successfully!!'
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
