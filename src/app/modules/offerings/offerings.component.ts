import {ChangeDetectionStrategy, Component, Injector, OnInit, ViewEncapsulation} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {OfferingPopupComponent} from "./offering-popup/offering-popup.component";
import {Offering} from "../../models/offering.model";
import {Observable, startWith} from "rxjs";
import {OfferingsService} from "../../services/offerings.service";

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferingsComponent implements OnInit {

  data$: Observable<Offering[]> = this.offeringsService.getMyOfferings().pipe(
    startWith([]),
  );

  private readonly dialog = this.dialogService.open<Offering>(
    new PolymorpheusComponent(OfferingPopupComponent, this.injector),
    {
      data: null,
      dismissible: false,
      label: 'Добавление услуги'
    },
  );

  constructor(private readonly dialogService: TuiDialogService,
              private readonly injector: Injector,
              private readonly offeringsService: OfferingsService) {
  }

  ngOnInit(): void {
  }

  add() {
    this.dialog.subscribe({
      next: offering => {
        console.log('Dialog emitted data');
      },
      complete: () => {
        console.log('Dialog closed');
      },
    });
  }
}
