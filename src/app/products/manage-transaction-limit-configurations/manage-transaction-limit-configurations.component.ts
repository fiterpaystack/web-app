import { Component, OnInit } from '@angular/core';
import { MatNavList, MatListItem } from '@angular/material/list';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-manage-transaction-limit-configurations',
  templateUrl: './manage-transaction-limit-configurations.component.html',
  styleUrls: ['./manage-transaction-limit-configurations.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatNavList
  ]
})
export class ManageTransactionLimitConfigurationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('ManageTransactionLimitConfigurationsComponent ngOnInit...');
  }
}
