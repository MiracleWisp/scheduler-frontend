import {Component, Injector, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Offering} from "../../models/offering.model";
import {User} from "../../models/user.model";
import {forkJoin} from "rxjs";
import {OfferingsService} from "../../services/offerings.service";
import {SpecialistsService} from "../../services/specialists.service";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {TuiDialogService} from "@taiga-ui/core";
import {CreateAppointmentDialogComponent} from "./create-appointment-dialog/create-appointment-dialog.component";

@Component({
  selector: 'app-embed',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmbedComponent implements OnInit {

  offerings: Offering[];
  specialist: User;

  private specialistId = this.activatedRoute.snapshot.params['specialistId'];

  constructor(private activatedRoute: ActivatedRoute,
              private offeringsService: OfferingsService,
              private specialistsService: SpecialistsService,
              private readonly dialogService: TuiDialogService,
              private readonly injector: Injector,) {
  }

  ngOnInit(): void {
    forkJoin([
      this.offeringsService.getOfferingsBySpecialistId(this.specialistId),
      this.specialistsService.getSpecialistById(this.specialistId)
    ]).subscribe(([offerings, specialist]) => {
      this.specialist = specialist;
      this.offerings = offerings;
    })
  }

  openCreateAppointmentDialog(offer: Offering): void {
    const dialog = this.dialogService.open<void>(
      new PolymorpheusComponent(CreateAppointmentDialogComponent, this.injector),
      {
        data: {offering: offer, specialist: this.specialist},
        dismissible: false,
        label: `Запись (${offer.name})`
      },
    );
    dialog.subscribe({
      next: () => {
        console.log('Dialog emitted data');
      },
      complete: () => {
        console.log('Dialog closed');
      },
    });
  }
}
