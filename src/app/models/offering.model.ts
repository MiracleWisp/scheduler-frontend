import {User} from "./user.model";

export class Offering {
  id: string;
  name: string;
  about: string;
  price: number;
  duration: number;
  approveRequired: boolean;
  specialistId: string;
}
