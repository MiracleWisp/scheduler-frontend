import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OfferingsService} from "../../../services/offerings.service";
import {OfferingsComponent} from "../offerings.component";
import {Offering} from "../../../models/offering.model";

@Component({
  selector: 'app-offering-popup',
  templateUrl: './offering-popup.component.html',
  styleUrls: ['./offering-popup.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class OfferingPopupComponent implements OnInit {

  loading = false;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    about: new FormControl('', Validators.required),
  });

  constructor(private readonly dialogService: TuiDialogService,
              @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<Offering, Offering>,
              private readonly offeringsService: OfferingsService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.loading = true;
    this.offeringsService.createOffering(this.form.value).subscribe(offering => {
        this.context.completeWith(offering)
      }
    )

  }

  close(): void {
    this.context.$implicit.complete();
  }
}
