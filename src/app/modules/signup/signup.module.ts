import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule, TuiTextAreaModule,
  TuiToggleModule
} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiLabelModule, TuiLinkModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    TuiIslandModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiToggleModule,
    TuiLabelModule,
    TuiCheckboxLabeledModule,
    TuiTextAreaModule
  ]
})
export class SignupModule { }
