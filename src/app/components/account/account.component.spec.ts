import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsService } from 'src/app/services/settings-service.service';
import { MatSnackBarStub } from 'src/app/shared/stubs/MatSnackBarStub';
import * as Rx from 'rxjs';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      providers: [
        FormBuilder,
        SettingsService,
        { provide: MatSnackBar, useClass: MatSnackBarStub },
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saveForm: call the save method in settingsService', () => {
    const service = fixture.debugElement.injector.get(SettingsService);
    spyOn(service, 'saveFormData').and.callFake(() => {
      return Rx.of('success');
    });
    spyOn(service, 'openSnackBar').and.callThrough();
    component.saveForm();
    expect(service.openSnackBar).toHaveBeenCalled();
  });

  it('resetForm: should reset the form', fakeAsync(() => {
    spyOn(component.form, 'resetForm').and.callThrough();
    component.resetForm();
    tick(200);
    expect(component.form.resetForm).toHaveBeenCalled();
  }));
});
