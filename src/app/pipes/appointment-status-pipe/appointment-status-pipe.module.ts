import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentStatusPipe} from "./appointment-status.pipe";
import { AppointmentStatusNamePipe } from './appointment-status-name.pipe';


@NgModule({
  declarations: [AppointmentStatusPipe, AppointmentStatusNamePipe],
  exports: [
    AppointmentStatusPipe,
    AppointmentStatusNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentStatusPipeModule {
}
