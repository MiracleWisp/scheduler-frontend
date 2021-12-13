import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Schedule} from "../../models/schedule.model";
import {ScheduleService} from "../../services/schedule.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(private scheduleService: ScheduleService) {
  }

  @HostBinding('class')
  private class = 'schedule'

  ngOnInit(): void {
    this.scheduleService.getMySchedule().subscribe(schedules => {
      this.schedules = schedules;
    })
  }

  log(e) {
    console.log(e);
  }
}
