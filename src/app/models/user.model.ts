import {Location} from './jobs.model';

export interface User {
  dateCreated: Date;
  email: string;
  emailVerified: boolean;
  lastLogin: Date;
  name: string;
  profileImageUrl: string;
  uid: string;
  postalCode: number;
  hoodDollars: number;
  location: Location;
}
