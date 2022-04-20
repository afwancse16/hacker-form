import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './components/account/account.component';
import { PlanBillingComponent } from './components/plan-billing/plan-billing.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MaterialModule } from './material.module';
import { PlanListComponent } from './shared/components/plan-list/plan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountComponent,
    PlanBillingComponent,
    NotificationsComponent,
    PlanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CreditCardDirectivesModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
