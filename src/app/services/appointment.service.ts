import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {map, Observable} from "rxjs";
import {Schedule} from "../models/schedule.model";
import {environment} from "../../environments/environment";
import {AppointmentDto} from '../models/dto/appointment.dto';
import {Appointment} from "../models/appointment.model";
import {convertOffsetTimeToString} from "../util/date-time-utils";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public getMyAppointments(): Observable<AppointmentDto[]> {
    return this.http.get<AppointmentDto[]>(`${environment.apiUrl}/specialists/${this.authService.currentUser.id}/appointments`);
  }

  public getSpecialistAppointments(specialistId: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/specialists/${specialistId}/schedules`);
  }

  public getSpecialistAppointmentsPerDay(specialistId: string, date): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/specialists/${specialistId}/schedules?date=${date}`);
  }

  public getAvailableTimeSlots(serviceId: string, date: string): Observable<string[]> {
    return this.http.get<{ timeslots: string[] }>(`${environment.apiUrl}/serviceOfferings/${serviceId}/timeslots?date=${date}`)
      .pipe(
        map(value => {
          return value.timeslots.map(convertOffsetTimeToString);
        })
      );
  }

  public createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.apiUrl}/appointments`, appointment);
  }

  public updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.patch<Appointment>(`${environment.apiUrl}/appointments/${appointment.id}`, appointment);
  }
}
