import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {Offering} from "../../../models/offering.model";
import {OfferingsService} from "../../../services/offerings.service";
import {TuiDay} from "@taiga-ui/cdk";

@Component({
  selector: 'app-create-appointment-dialog',
  templateUrl: './create-appointment-dialog.component.html',
  styleUrls: ['./create-appointment-dialog.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAppointmentDialogComponent implements OnInit {

  activeItemIndex = 0;

  steps: Step[] = [{
    caption: 'Дата',
    state: 'normal'
  }, {
    caption: 'Время',
    state: 'normal'
  }, {
    caption: 'Подтверждение',
    state: 'normal'
  }]

  chosenDate: TuiDay;

  constructor(private readonly dialogService: TuiDialogService,
              @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<Offering, Offering>,
              private readonly offeringsService: OfferingsService) {
  }

  ngOnInit(): void {
  }

  onDayClick(day: TuiDay) {
    this.chosenDate = day;
  }

  back() {
    this.steps[this.activeItemIndex].state = 'normal';
    this.activeItemIndex--;
  }

  next() {
    if (this.isLastStep()) {
      return;
    }
    this.steps[this.activeItemIndex].state = 'pass';
    this.activeItemIndex++;
  }

  isLastStep(): boolean {
    return this.activeItemIndex === (this.steps.length - 1)
  }

  get nextBtn(): string {
    return this.isLastStep() ? 'Подтвердить' : 'Далее';
  }
}

interface Step {
  caption: string,
  state: 'normal' | 'pass' | 'error'
}
