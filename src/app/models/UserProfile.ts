export interface UserProfile {
  uid: string;
  email?: string;
  photoURL?: string | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  address?: string | null | undefined;
  phone?: string | null | undefined;
  displayName?: string | null | undefined
}
