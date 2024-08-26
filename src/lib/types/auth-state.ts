import { User } from "firebase/auth";
import { Role } from "./user-role";

export type AuthState = {
  authUser: User;
  userRoles: Role[];
};
