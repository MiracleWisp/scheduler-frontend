import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentStatusPipe} from "./appointment-status.pipe";


@NgModule({
  declarations: [AppointmentStatusPipe],
  exports: [
    AppointmentStatusPipe
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentStatusPipeModule {
}
