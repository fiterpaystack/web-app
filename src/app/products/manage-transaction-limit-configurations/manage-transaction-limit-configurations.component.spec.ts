import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTransactionLimitConfigurationsComponent } from './manage-transaction-limit-configurations.component';

describe('ManageTransactionLimitConfigurationsComponent', () => {
  let component: ManageTransactionLimitConfigurationsComponent;
  let fixture: ComponentFixture<ManageTransactionLimitConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageTransactionLimitConfigurationsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageTransactionLimitConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
