import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OfferingsRoutingModule} from './offerings-routing.module';
import {OfferingsComponent} from './offerings.component';


@NgModule({
  declarations: [
    OfferingsComponent
  ],
  imports: [
    CommonModule,
    OfferingsRoutingModule
  ]
})
export class OfferingsModule {
}
