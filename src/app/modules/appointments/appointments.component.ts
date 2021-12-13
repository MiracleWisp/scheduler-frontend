import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentsComponent implements OnInit {

  isSpecialist: boolean = this.authService.currentUser.isSpecialist;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
