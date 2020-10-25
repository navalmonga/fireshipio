export interface User {
  uid: string;
  provider: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}