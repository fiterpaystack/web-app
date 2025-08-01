/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

/** Custom Components */
import { ProfileComponent } from './profile.component';

/**
 * Profile Module
 */
@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
    ProfileComponent
  ]
})
export class ProfileModule {}
