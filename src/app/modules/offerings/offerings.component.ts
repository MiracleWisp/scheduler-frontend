import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
