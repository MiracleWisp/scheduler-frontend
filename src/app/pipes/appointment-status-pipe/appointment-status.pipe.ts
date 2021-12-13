import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appointmentStatus'
})
export class AppointmentStatusPipe implements PipeTransform {

  transform(value: string): string {
    return `_${value.toLowerCase()}`;
  }

}
