import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "../models/schedule.model";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {tap} from "rxjs/operators";
import {convertOffsetTimeToString, convertStringToOffsetTime} from "../util/date-time-utils";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public getMySchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/specialists/${this.authService.currentUser.id}/schedules`).pipe(
      tap(schedules => {
        schedules.forEach(schedule => {
          schedule.workStartTime = convertOffsetTimeToString(schedule.workStartTime);
          schedule.workEndTime = convertOffsetTimeToString(schedule.workEndTime);
        })
      })
    );
  }

  public getSpecialistSchedule(specialistId: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/specialists/${specialistId}/schedules`);
  }

  public updateSchedule(schedule: Schedule): Observable<Schedule> {
    schedule.workStartTime = convertStringToOffsetTime(schedule.workStartTime);
    schedule.workEndTime = convertStringToOffsetTime(schedule.workEndTime);
    return this.http.patch<Schedule>(`${environment.apiUrl}/schedules/${schedule.id}`, schedule).pipe(
      tap(schedule => {
        schedule.workStartTime = convertOffsetTimeToString(schedule.workStartTime);
        schedule.workEndTime = convertOffsetTimeToString(schedule.workEndTime);
      })
    );
  }
}
