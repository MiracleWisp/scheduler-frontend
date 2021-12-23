import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {AppointmentDto} from "../../../models/dto/appointment.dto";
import {APPOINTMENT_STATUS_MAP} from "../../../models/const/appointment-status.enum";
import {AppointmentService} from "../../../services/appointment.service";

@Component({
  selector: 'app-client-appointments',
  templateUrl: './client-appointments.component.html',
  styleUrls: ['./client-appointments.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientAppointmentsComponent implements OnInit {

  appointments$: Observable<AppointmentDto[]> = this.appointmentService.getMyAppointments();
  appointmentStatusMap = APPOINTMENT_STATUS_MAP;
  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
  }

}
