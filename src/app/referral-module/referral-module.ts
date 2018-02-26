import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgamrsSharedModule } from '../shared/ngamrs-shared.module';
import {
  PatientReferralContainerComponent
} from './components/patient-referral-container.component';
import { PatientReferralItemComponent } from './components/patient-referral-item.component';
import { ProgramWorkFlowResourceService } from '../openmrs-api/program-workflow-resource.service';
import { ProgramWorkFlowStateResourceService
} from '../openmrs-api/program-workflow-state-resource.service';
import { ProgramEnrollmentResourceService
} from '../openmrs-api/program-enrollment-resource.service';
import { PatientReferralService } from './services/patient-referral-service';
import { PatientReferralVisitComponent } from './components/patient-referral-visit.component';
import { ProgramReferralResourceService } from '../etl-api/program-referral-resource.service';
import { DataListsModule } from '../shared/data-lists/data-lists.module';
import { ReferralTsComponent } from './components/provider-referral.component';
import { ProviderDashboardFiltersComponent
} from '../provider-dashboard/dashboard-filters/provider-dashboard-filters.component';
import { SelectModule } from 'ng2-select';
import { DateTimePickerModule } from 'ng2-openmrs-formentry/dist/components/date-time-picker';
import { AgGridModule } from 'ag-grid-angular';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import {
  PatientReferralBaseComponent
} from './patient-referral/patient-referral-report-base.component';
import {
  PatientReferralTabularComponent
} from './patient-referral/patient-referral-tabular.component';
import { DialogModule } from 'primeng/primeng';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgamrsSharedModule,
    DataListsModule,
    DateTimePickerModule,
    SelectModule,
    AgGridModule.withComponents([]),
    TabViewModule,
    DialogModule
  ],
  exports: [
  ReferralTsComponent,
  PatientReferralContainerComponent,
  PatientReferralItemComponent,
  PatientReferralVisitComponent,
  PatientReferralContainerComponent,
  PatientReferralBaseComponent,
  PatientReferralTabularComponent,
  ],
  declarations: [
  ReferralTsComponent,
  PatientReferralContainerComponent,
  PatientReferralItemComponent,
  PatientReferralVisitComponent,
  ProviderDashboardFiltersComponent,
  PatientReferralContainerComponent,
  PatientReferralBaseComponent,
  PatientReferralTabularComponent,
  ],
  providers: [
    ProgramEnrollmentResourceService,
    ProgramReferralResourceService,
    ProgramWorkFlowResourceService,
    PatientReferralService,
    ProgramWorkFlowStateResourceService
  ],

})
export class ReferralModule {
}
