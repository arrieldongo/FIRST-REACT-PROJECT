import { Timestamp } from "firebase/firestore";


export interface UserInterface {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  UserDocument?: UserDocument;
}

export interface UserDocument {
  uid: string;
  email: string;
  how_did_hear: string;
  creation_date: Timestamp;
  //.....
}

