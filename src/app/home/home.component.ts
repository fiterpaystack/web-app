/** Angular Imports */
import { Component, OnInit, TemplateRef, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

/** Custom Imports. */
import { activities } from './activities';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';

/** Custom Services */
import { AuthenticationService } from '../core/authentication/authentication.service';
import { PopoverService } from '../configuration-wizard/popover/popover.service';
import { ConfigurationWizardService } from '../configuration-wizard/configuration-wizard.service';
import { ThemingService } from '../shared/theme-toggle/theming.service';

/** Custom Components */
import { NextStepDialogComponent } from '../configuration-wizard/next-step-dialog/next-step-dialog.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Home component.
 */
@Component({
  selector: 'mifosx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    MatCardHeader,
    MatCardTitle,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatCardImage,
    AsyncPipe
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  /** Username of authenticated user. */
  username: string;
  /** Activity Form. */
  activityForm: any;
  /** Search Text. */
  searchText: UntypedFormControl = new UntypedFormControl();
  /** Filtered Activities. */
  filteredActivities: Observable<any[]>;
  /** All User Activities. */
  allActivities: any[] = activities;

  /* Reference of dashboard button */
  @ViewChild('buttonDashboard', { static: false }) buttonDashboard: ElementRef<any>;
  /* Template for popover on dashboard button */
  @ViewChild('templateButtonDashboard', { static: false }) templateButtonDashboard: TemplateRef<any>;
  /* Reference of search activity */
  @ViewChild('searchActivity', { static: false }) searchActivity: ElementRef<any>;
  /* Template for popover on search activity */
  @ViewChild('templateSearchActivity', { static: false }) templateSearchActivity: TemplateRef<any>;

  logoSrc = 'assets/images/paystack_logo_dark.png';

  /**
   * @param {AuthenticationService} authenticationService Authentication Service.
   * @param {ActivatedRoute} activatedRoute ActivatedRoute.
   * @param {Router} router Router.
   * @param {MatDialog} dialog MatDialog.
   * @param {ConfigurationWizardService} configurationWizardService ConfigurationWizard Service.
   * @param {PopoverService} popoverService PopoverService.
   */
  constructor(
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private configurationWizardService: ConfigurationWizardService,
    private popoverService: PopoverService,
    private themingService: ThemingService
  ) {}

  /**
   * Sets the username of the authenticated user.
   * Set Form.
   */
  ngOnInit() {
    const credentials = this.authenticationService.getCredentials();
    this.username = credentials.username;
    this.setFilteredActivities();
    if (!this.authenticationService.hasDialogBeenShown()) {
      this.dialog.open(WarningDialogComponent);
      this.authenticationService.showDialog();
    }
    this.themingService.theme.subscribe((currentTheme) => {
      this.logoSrc =
        currentTheme === 'light-theme'
          ? 'assets/images/paystack_logo_dark.png'
          : 'assets/images/paystack_logo_light.png';
    });
  }

  /**
   * Sets filtered activities for autocomplete.
   */
  setFilteredActivities() {
    this.filteredActivities = this.searchText.valueChanges.pipe(
      map((activity: any) => (typeof activity === 'string' ? activity : activity.activity)),
      map((activityName: string) => (activityName ? this.filterActivity(activityName) : this.allActivities))
    );
  }

  /**
   * Filters activities.
   * @param activityName Activity name to filter activity by.
   * @returns {any} Filtered activities.
   */
  private filterActivity(activityName: string): any {
    const filterValue = activityName.toLowerCase();
    return this.allActivities.filter((activity) => activity.activity.toLowerCase().indexOf(filterValue) === 0);
  }

  /**
   * Popover function
   * @param template TemplateRef<any>.
   * @param target HTMLElement | ElementRef<any>.
   * @param position String.
   * @param backdrop Boolean.
   */
  showPopover(
    template: TemplateRef<any>,
    target: HTMLElement | ElementRef<any>,
    position: string,
    backdrop: boolean
  ): void {
    setTimeout(() => this.popoverService.open(template, target, position, backdrop, {}), 200);
  }

  /**
   * To show popover.
   */
  ngAfterViewInit() {
    if (this.configurationWizardService.showHome === true) {
      setTimeout(() => {
        this.showPopover(this.templateButtonDashboard, this.buttonDashboard.nativeElement, 'bottom', true);
      });
    }
    if (this.configurationWizardService.showHomeSearchActivity === true) {
      setTimeout(() => {
        this.showPopover(this.templateSearchActivity, this.searchActivity.nativeElement, 'bottom', true);
      });
    }
  }

  /**
   * Open Dialog for next step.
   * Next Step (Organization) Configuration Wizard.
   */
  nextStep() {
    this.configurationWizardService.showHome = false;
    this.configurationWizardService.showHomeSearchActivity = false;
    this.openNextStepDialog();
  }

  /**
   * Next Step (Organization) Dialog Configuration Wizard.
   */
  openNextStepDialog() {
    const nextStepDialogRef = this.dialog.open(NextStepDialogComponent, {
      data: {
        nextStepName: 'Setup Organization',
        previousStepName: 'Home Tour',
        stepPercentage: 10
      }
    });
    nextStepDialogRef.afterClosed().subscribe((response: { nextStep: boolean }) => {
      if (response.nextStep) {
        this.configurationWizardService.showHome = false;
        this.configurationWizardService.showHomeSearchActivity = false;
        this.configurationWizardService.showCreateOffice = true;
        this.router.navigate(['/organization']);
      } else {
        this.configurationWizardService.showHome = false;
        this.configurationWizardService.showHomeSearchActivity = false;
        this.router.navigate(['/home']);
      }
    });
  }

  /**
   * Previous Step (Breadcrumbs) Configuration Wizard.
   */
  previousStep() {
    this.configurationWizardService.showHome = false;
    this.configurationWizardService.showHomeSearchActivity = false;
    this.configurationWizardService.showBreadcrumbs = true;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home']);
  }
}
