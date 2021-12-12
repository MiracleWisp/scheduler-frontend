import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {TuiInputModule, TuiInputPasswordModule, TuiIslandModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        TuiInputPasswordModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiInputModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiLinkModule
    ]
})
export class LoginModule { }
