import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IAccount, ICountry, ILanguage, INotification, IPlan } from '../app';


@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  countryList$: Observable<ICountry[]> = this.http.get<ICountry[]>(
    'assets/data/countryList.json'
  );
  languageList$: Observable<ILanguage[]> = this.http.get<ILanguage[]>(
    'assets/data/languageList.json'
  );

  constructor(private http: HttpClient, public _snackBar: MatSnackBar) {}

  saveFormData(formData: IAccount | INotification | IPlan): Observable<string> {
    console.log(formData);
    return new Observable<string>(observer => {
      observer.next("success");
      observer.complete();
    });
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'close', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
