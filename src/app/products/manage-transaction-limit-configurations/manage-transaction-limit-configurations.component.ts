import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mifosx-manage-transaction-limit-configurations',
  templateUrl: './manage-transaction-limit-configurations.component.html',
  styleUrls: ['./manage-transaction-limit-configurations.component.scss']
})
export class ManageTransactionLimitConfigurationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('ManageTransactionLimitConfigurationsComponent ngOnInit...');
  }
}
