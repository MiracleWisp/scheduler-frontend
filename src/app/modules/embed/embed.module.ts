import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbedRoutingModule } from './embed-routing.module';
import { EmbedComponent } from './embed.component';
import {TuiIslandModule, TuiStepperModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiCalendarModule} from "@taiga-ui/core";
import { CreateAppointmentDialogComponent } from './create-appointment-dialog/create-appointment-dialog.component';


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
    TuiCalendarModule
  ]
})
export class EmbedModule { }
