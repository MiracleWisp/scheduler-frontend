import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
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

  @Input()
  data: Offering[];

  columns = [
    'name',
    'price',
    'duration',
    'about',
    'actions'
  ];

  constructor(private offeringsService: OfferingsService) {
  }

  ngOnInit(): void {
  }

  remove(item: any) {

  }

  edit(item: Offering) {

  }
}
