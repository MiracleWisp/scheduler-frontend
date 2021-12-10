import {InjectionToken} from '@angular/core';
import {User} from '../models/user.model';

export const CURRENT_USER = new InjectionToken<User>('Inject current user');
