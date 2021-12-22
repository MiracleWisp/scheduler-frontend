import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppointmentService} from "../../../services/appointment.service";
import {Observable} from "rxjs";
import {AppointmentDto} from "../../../models/dto/appointment.dto";
import {APPOINTMENT_STATUS_MAP} from "../../../models/const/appointment-status.enum";

@Component({
  selector: 'app-specialist-appointments',
  templateUrl: './specialist-appointments.component.html',
  styleUrls: ['./specialist-appointments.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialistAppointmentsComponent implements OnInit {

  appointments$: Observable<AppointmentDto[]> = this.appointmentService.getMyAppointments();
  appointmentStatusMap = APPOINTMENT_STATUS_MAP;
  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
  }

}
