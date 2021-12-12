import {Role} from "./const/role.enum";

export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isSpecialist: boolean;
  jobTitle: string;
  about: string;
  roles: Role[];
}
