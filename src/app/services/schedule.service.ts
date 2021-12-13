import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "../models/schedule.model";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public getMySchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/specialists/${this.authService.currentUser.id}/schedules`);
  }

  public getSpecialistSchedule(specialistId: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/specialists/${specialistId}/schedules`);
  }
}
