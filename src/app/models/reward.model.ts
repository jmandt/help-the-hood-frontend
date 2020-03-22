import * as firebase from 'firebase/app'

export interface Reward {
  providerId: string;
  providerName: string;
  name: string;
  description: string;
  dollarCost: number;
  location: firebase.firestore.GeoPoint
}
