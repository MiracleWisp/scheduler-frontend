import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbedRoutingModule } from './embed-routing.module';
import { EmbedComponent } from './embed.component';
import {
  TuiAvatarModule,
  TuiIslandModule,
  TuiLineClampModule,
  TuiRadioLabeledModule,
  TuiStepperModule
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiCalendarModule, TuiSvgModule} from "@taiga-ui/core";
import { CreateAppointmentDialogComponent } from './create-appointment-dialog/create-appointment-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppointmentStatusPipeModule} from "../../pipes/appointment-status-pipe/appointment-status-pipe.module";


@NgModule({
  declarations: [
    EmbedComponent,
    CreateAppointmentDialogComponent
  ],
  imports: [
    CommonModule,
    EmbedRoutingModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiStepperModule,
    TuiCalendarModule,
    TuiRadioLabeledModule,
    FormsModule,
    ReactiveFormsModule,
    TuiAvatarModule,
    AppointmentStatusPipeModule,
    TuiSvgModule,
    TuiLineClampModule
  ]
})
export class EmbedModule { }
