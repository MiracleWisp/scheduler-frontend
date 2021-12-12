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

  open = false;
  menuItems: MenuItem[] = [
    {
      link: '/appointments',
      caption: 'Мои записи'
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
  allItems = [...this.menuItems, ...this.dropdownItems];


  @HostBinding('class')
  private class = 'header'

  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    if (this.authService.currentUser.isSpecialist) {
      this.menuItems.push({
        link: '/schedule',
        caption: 'Моё расписание'
      })
    }
  }

  onClick(item: MenuItem) {
    this.open = false;
    if (item.caption === 'Выйти') {
      this.authService.logout()
    }
  }

  toggle(open: boolean) {
    this.open = open;
  }
}

interface MenuItem {
  link?: string;
  caption?: string;
}
