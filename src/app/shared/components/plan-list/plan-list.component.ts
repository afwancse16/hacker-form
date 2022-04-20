import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent {

  @Input() currentPlan: string;
  @Output() cardSelected = new EventEmitter<string>();
  planList = [
    {
      name: 'BASIC',
      description: 'Starter plan for individuals',
      price: '$10 / month',
    },
    {
      name: 'TEAM',
      description: 'Collaborate up to 10 people',
      price: '$20 / month',
    },
    {
      name: 'ENTERPRISE',
      description: 'For bigger businesses',
      price: '$40 / month',
    },
  ];

  selectCard(name: string) {
    this.cardSelected.emit(name);
  }
}
