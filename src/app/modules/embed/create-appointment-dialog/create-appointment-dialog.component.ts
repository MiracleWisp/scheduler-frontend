import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {Offering} from "../../../models/offering.model";
import {OfferingsService} from "../../../services/offerings.service";
import {TuiDay} from "@taiga-ui/cdk";
import {AppointmentService} from "../../../services/appointment.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Appointment} from "../../../models/appointment.model";
import {User} from "../../../models/user.model";

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
  offering: Offering;
  chosenDate: TuiDay = TuiDay.currentLocal();
  chosenTime: string;
  timeslots: string[];
  timeslotForm = new FormGroup({
    timeslot: new FormControl(),
  });
  loading = false;
  appointment: Appointment;
  specialist: User;

  @HostBinding('class')
  private class = 'create-appointment-dialog';

  constructor(private readonly dialogService: TuiDialogService,
              @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<Appointment, { offering: Offering, specialist: User }>,
              private readonly offeringsService: OfferingsService,
              private readonly appointmentsService: AppointmentService,
              private readonly cdr: ChangeDetectorRef) {
    this.offering = context.data.offering;
    this.specialist = context.data.specialist;
  }

  ngOnInit(): void {
  }

  onDayClick(day: TuiDay) {
    this.chosenDate = day;
    console.log(this.chosenDate.toString());
    console.log(this.chosenDate.toJSON());
  }

  back() {
    this.steps[this.activeItemIndex].state = 'normal';
    this.activeItemIndex--;
    if (this.appointment) {
      this.deleteAppointment().subscribe(appointment => {
        this.appointment = undefined;
      })
    }
  }

  next() {
    this.loading = true;
    switch (this.activeItemIndex) {
      case 0:
        this.fetchAppointments().subscribe(timeslots => {
          this.timeslots = timeslots;
          this.updateStepper();
        }, error => {
          this.loading = false;
        });
        break;
      case 1:
        this.createDraftAppointment().subscribe(appointment => {
          this.appointment = appointment;
          this.updateStepper();
        }, error => {
          this.loading = false;
        });
        break;
      case 2:
        this.updateAppointment('FUTURE').subscribe(appointment => {
          this.context.completeWith(appointment);
        }, error => {
          this.loading = false;
        })
        break;
    }
  }

  isLastStep(): boolean {
    return this.activeItemIndex === (this.steps.length - 1)
  }

  private createDraftAppointment(): Observable<Appointment> {
    const date = new Date(`${this.chosenDate.toJSON()}T${this.timeslotForm.value.timeslot}`)
    return this.appointmentsService.createAppointment({
      date: date.toISOString(),
      serviceId: this.offering.id
    });
  }

  private updateAppointment(status: string): Observable<Appointment> {
    this.appointment.status = status;
    return this.appointmentsService.updateAppointment(this.appointment);
  }

  private updateStepper(): void {
    this.loading = false;
    this.steps[this.activeItemIndex].state = 'pass';
    this.activeItemIndex++;
    this.cdr.markForCheck();
  }

  private fetchAppointments(): Observable<any> {
    return this.appointmentsService.getAvailableTimeSlots(this.offering.id, this.chosenDate.toUtcNativeDate().toISOString());
  }

  get nextBtn(): string {
    return this.isLastStep() ? 'Подтвердить' : 'Далее';
  }

  timePicked(timeslot: string) {
    console.log(timeslot);
  }

  private deleteAppointment() {
    return this.appointmentsService.deleteAppointment(this.appointment.id);
  }
}

interface Step {
  caption: string,
  state: 'normal' | 'pass' | 'error'
}
