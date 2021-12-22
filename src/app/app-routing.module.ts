import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/login.guard";
import {RoleGuard} from "./guards/role.guard";
import {Role} from "./models/const/role.enum";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'appointments',
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'appointments',
    loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'schedule',
    loadChildren: () => import('./modules/schedule/schedule.module').then(m => m.ScheduleModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: [Role.ROLE_SPECIALIST]}
  },
  {
    path: 'offerings',
    loadChildren: () => import('./modules/offerings/offerings.module').then(m => m.OfferingsModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: [Role.ROLE_SPECIALIST]}
  },
  {
    path: 'embed',
    loadChildren: () => import('./modules/embed/embed.module').then(m => m.EmbedModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
