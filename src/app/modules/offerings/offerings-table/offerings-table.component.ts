import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable, startWith} from "rxjs";
import {Offering} from "../../../models/offering.model";
import {OfferingsService} from "../../../services/offerings.service";

@Component({
  selector: 'app-offerings-table',
  templateUrl: './offerings-table.component.html',
  styleUrls: ['./offerings-table.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferingsTableComponent implements OnInit {

  columns = [
    'name',
    'price',
    'duration',
    'about',
    'actions'
  ];

  data$: Observable<Offering[]> = this.offeringsService.getMyOfferings().pipe(
    startWith([]),
  );

  constructor(private offeringsService: OfferingsService) {
  }

  ngOnInit(): void {
  }

  remove(item: any) {

  }

  edit(item: Offering) {

  }
}
