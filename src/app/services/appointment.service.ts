import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Schedule} from "../models/schedule.model";
import {environment} from "../../environments/environment";
import {AppointmentDto} from '../models/dto/appointment.dto';

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
}
