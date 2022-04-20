import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PlanBillingComponent } from './components/plan-billing/plan-billing.component';

const routes: Routes = [
  {
    path: 'settings',
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'plan-billing', component: PlanBillingComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'account' }
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'settings' },
  { path: '**', redirectTo: 'settings' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
