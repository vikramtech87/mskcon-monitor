import { Role } from "./user-role";

export type Resource = {
  label: string;
  url: string;
  allowedRoles: Role[];
};
