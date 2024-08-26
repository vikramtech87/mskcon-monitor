import { Designation } from "./designation";

export type ProfileDataWithoutId = {
  designation: Designation;
  email: string;
  firstName: string;
  lastName: string;
};

export type ProfileData = ProfileDataWithoutId & { userId: string };
