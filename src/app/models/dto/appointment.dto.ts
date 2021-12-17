import {AppointmentStatus} from "../const/appointment-status.enum";

export class AppointmentDto {
  id: string;
  date: string;
  status: AppointmentStatus;
  serviceName: string;
  servicePrice: string;
  serviceDuration: number;
  clientName: string;
  specialistName: string;
  specialistJobTitle: string;
}
