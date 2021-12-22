import { Pipe, PipeTransform } from '@angular/core';
import {APPOINTMENT_STATUS_MAP, AppointmentStatus} from "../../models/const/appointment-status.enum";

@Pipe({
  name: 'appointmentStatusName'
})
export class AppointmentStatusNamePipe implements PipeTransform {

  transform(value: AppointmentStatus): unknown {
    return APPOINTMENT_STATUS_MAP.get(value);
  }

}
