import {ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  loading = false;
  loginForm: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @HostBinding('class')
  private class = 'login';

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(_ => {
      this.loading = false;
    })
  }
}
