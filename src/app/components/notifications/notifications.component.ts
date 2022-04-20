import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { SettingsService } from 'src/app/services/settings-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnDestroy {
  notifier = new Subject<void>();
  notificationForm = this.fb.group({
    communication: [false],
    security: [false],
    meetups: [false],
    somecomments: [false],
    somementions: [false],
    somefollows: [false],
    somereplies: [false],
  });

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {}

  saveForm() {
    this.settingsService
      .saveFormData(this.notificationForm.value)
      .pipe(
        takeUntil(this.notifier),
        tap((_) => {
          this.settingsService.openSnackBar(
            'Notification Updated Successfully!!'
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
