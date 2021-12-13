import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import {TuiInputModule, TuiInputTimeModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    TuiInputModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
    TuiInputTimeModule,
    FormsModule,
    TuiButtonModule
  ]
})
export class ScheduleModule { }
