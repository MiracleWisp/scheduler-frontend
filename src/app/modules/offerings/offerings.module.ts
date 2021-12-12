import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OfferingsRoutingModule} from './offerings-routing.module';
import {OfferingsComponent} from './offerings.component';
import { OfferingsTableComponent } from './offerings-table/offerings-table.component';
import {TuiInputModule, TuiLineClampModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLoaderModule, TuiScrollbarModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormsModule} from "@angular/forms";
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiTableModule} from "@taiga-ui/addon-table";


@NgModule({
  declarations: [
    OfferingsComponent,
    OfferingsTableComponent
  ],
  imports: [
    CommonModule,
    OfferingsRoutingModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiLoaderModule,
    TuiLetModule,
    TuiTableModule,
    TuiButtonModule,
    TuiScrollbarModule,
    TuiLineClampModule
  ]
})
export class OfferingsModule {
}
