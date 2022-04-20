import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  currentUrl: string = '';
  menuList = [
    {
      name: 'Account',
      description: 'Manage your public profile and public information',
      path: '/settings/account',
      icon: 'account_circle',
    },
    {
      name: 'Plan & Billing',
      description:
        'Manage your subscription plan, payment method and billing information',
      path: '/settings/plan-billing',
      icon: 'payment',
    },
    {
      name: 'Notifications',
      description: 'Manage when you`ll be notified on which channels',
      path: '/settings/notifications',
      icon: 'notifications',
    },
  ];

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  changeForm(url: string) {
    this.router.navigate([url]);
  }
}
