import {ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {


  constructor(private authService: AuthService,
              private router: Router) {
  }

  loading = false;
  signupForm: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    isSpecialist: new FormControl(false),
    jobTitle: new FormControl(''),
    about: new FormControl(''),
  });

  @HostBinding('class')
  private class = 'signup';

  ngOnInit(): void {
  }

  signup() {
    this.loading = true;
    this.authService.signup(this.signupForm.value).subscribe({
      next: _ => {
        this.loading = false;
        this.router.navigate(['/login'], {state: {successfulSignup: true}});
      },
      error: error => {
        this.loading = false;
      }
    })
  }
}
