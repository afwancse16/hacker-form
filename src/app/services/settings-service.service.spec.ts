import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarStub } from '../shared/stubs/MatSnackBarStub';

import { SettingsService } from './settings-service.service';



describe('SettingsServiceService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        SettingsService,
        { provide: MatSnackBar, useClass: MatSnackBarStub },
      ],
    });
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('saveFormData: should return success observable', () => {
    const data = {
      about: '',
      company: '',
      country: 'India',
      email: '',
      language: 'English',
      name: 'adsda',
      phone: '',
      title: '',
      username: '',
    };
    service.saveFormData(data).subscribe((data) => {
      expect(data).toEqual('success');
    });
  });

  it('openSnackBar: call the open method of snackbar', () => {
    spyOn(service._snackBar, 'open').and.callThrough();
    service.openSnackBar('some message');
    expect(service._snackBar.open).toHaveBeenCalled();
  });
});
