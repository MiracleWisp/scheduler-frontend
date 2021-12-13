import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Schedule} from "../../models/schedule.model";
import {ScheduleService} from "../../services/schedule.service";
import {forkJoin} from "rxjs";
import {TuiTime} from "@taiga-ui/cdk";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleComponent implements OnInit {

  daysMap = {
    0: 'Понедельник',
    1: 'Вторник',
    2: 'Среда',
    3: 'Четверг',
    4: 'Пятница',
    5: 'Суббота',
    6: 'Воскресенье'
  }

  schedules: Schedule[] = [];
  loading = false;

  constructor(private scheduleService: ScheduleService) {
  }

  @HostBinding('class')
  private class = 'schedule'

  ngOnInit(): void {
    this.scheduleService.getMySchedule().subscribe(schedules => {
      this.schedules = schedules;
    })
  }

  save(): void {
    const tasks = [];
    this.loading = true;
    for (const schedule of this.schedules) {
      let changed = false;
      if (typeof schedule.workStartTime !== "string") {
        const startTuiTime = <TuiTime>schedule.workStartTime;
        schedule.workStartTime = startTuiTime.toString("HH:MM");
        changed = true;
      }
      if (typeof schedule.workEndTime !== "string") {
        const endTuiTime = <TuiTime>schedule.workEndTime;
        schedule.workEndTime = endTuiTime.toString("HH:MM");
        changed = true;
      }
      if (changed) {
        tasks.push(this.scheduleService.updateSchedule(schedule))
      }

    }
    forkJoin(tasks).subscribe({
      complete: () => {
        this.loading = false;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
