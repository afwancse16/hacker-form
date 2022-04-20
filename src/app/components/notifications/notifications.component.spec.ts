import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsService } from 'src/app/services/settings-service.service';
import { MatSnackBarStub } from 'src/app/shared/stubs/MatSnackBarStub';
import { NotificationsComponent } from './notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as Rx from 'rxjs';


describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsComponent ],
      providers: [
        FormBuilder,
        SettingsService,
        { provide: MatSnackBar, useClass: MatSnackBarStub },
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
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
});
