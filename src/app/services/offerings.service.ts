import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offering} from "../models/offering.model";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public getMyOfferings(): Observable<Offering[]> {
    return this.http.get<Offering[]>(`${environment.apiUrl}/specialists/${this.authService.currentUser.id}/serviceOfferings`);
  }
}
