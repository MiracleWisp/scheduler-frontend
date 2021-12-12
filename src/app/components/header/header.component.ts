import {ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  currentUser$: Observable<User> = this.authService.currentUserSubject;

  constructor(private authService: AuthService) {
  }

  @HostBinding('class')
  private class = 'header'

  menuItems: MenuItem[] = [
    {
      link: '/appointments',
      caption: 'Мои записи'
    },
    {
      link: '/schedule',
      caption: 'Моё расписание'
    }
  ]
  dropdownItems: MenuItem[] = [
    {
      link: '/profile',
      caption: 'Профиль'
    },
    {
      caption: 'Выйти'
    }
  ];

  ngOnInit(): void {
  }

  onClick(item: MenuItem) {
    if (item.caption === 'Выйти') {
      this.authService.logout()
    }
  }
}

interface MenuItem {
  link?: string;
  caption?: string;
}
