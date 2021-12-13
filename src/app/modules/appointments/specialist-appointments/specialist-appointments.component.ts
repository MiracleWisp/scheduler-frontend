import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppointmentService} from "../../../services/appointment.service";
import {Observable} from "rxjs";
import {AppointmentDto} from "../../../models/appointment.dto";

@Component({
  selector: 'app-specialist-appointments',
  templateUrl: './specialist-appointments.component.html',
  styleUrls: ['./specialist-appointments.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialistAppointmentsComponent implements OnInit {

  appointments$: Observable<AppointmentDto[]> = this.appointmentService.getMyAppointments();

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
  }

}
