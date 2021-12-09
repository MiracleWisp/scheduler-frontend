import {ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class')
  private class = 'header'

  ngOnInit(): void {
  }

}
