import { Timestamp } from "firebase/firestore";
import { Designation } from "./designation";

export type ProfileData = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  college: string;
  country: string;
  createdAt: Timestamp;
  designation: Designation;
  email: string;
  firstName: string;
  lastName: string;
  medicalCouncil: string;
  medicalCouncilNumber: string;
  mobileNumber: string;
  postalCode: string;
  registerNumber: string;
  state: string;
  title: string;
  updatedAt: Timestamp;
  id: string;
};
