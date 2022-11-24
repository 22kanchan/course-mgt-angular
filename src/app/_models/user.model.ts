import { Role } from './role';

export class User {
  id!: string;
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string ;
  token!: string ;
  email!: string ;
  mothersName!: string ;
  fathersName!: string ;
  address!: string ;
  pincode!: number ;
  dob!: Date;
  course!: string;
  role!: Role;
}