import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppointmentsRoutingModule} from './appointments-routing.module';
import {AppointmentsComponent} from './appointments.component';
import {SpecialistAppointmentsComponent} from './specialist-appointments/specialist-appointments.component';
import {ClientAppointmentsComponent} from './client-appointments/client-appointments.component';
import {TuiAvatarModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiSvgModule} from "@taiga-ui/core";
import {AppointmentStatusPipeModule} from "../../pipes/appointment-status-pipe/appointment-status-pipe.module";


@NgModule({
  declarations: [
    AppointmentsComponent,
    SpecialistAppointmentsComponent,
    ClientAppointmentsComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    TuiIslandModule,
    TuiAvatarModule,
    TuiSvgModule,
    AppointmentStatusPipeModule
  ]
})
export class AppointmentsModule {
}
