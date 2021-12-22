import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offering} from "../models/offering.model";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  constructor(private http: HttpClient) {
  }

  public getSpecialistById(specialistId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/specialists/${specialistId}`);
  }
}
