import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OfferingsRoutingModule} from './offerings-routing.module';
import {OfferingsComponent} from './offerings.component';
import { OfferingsTableComponent } from './offerings-table/offerings-table.component';
import {TuiInputModule, TuiInputNumberModule, TuiLineClampModule, TuiTextAreaModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLoaderModule, TuiScrollbarModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiTableModule} from "@taiga-ui/addon-table";
import { OfferingPopupComponent } from './offering-popup/offering-popup.component';


@NgModule({
  declarations: [
    OfferingsComponent,
    OfferingsTableComponent,
    OfferingPopupComponent
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
    TuiLineClampModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiInputNumberModule
  ]
})
export class OfferingsModule {
}
