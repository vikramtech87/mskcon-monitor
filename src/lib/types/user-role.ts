// Reference: mskcon-scripts/src/utils.ts

export type Role =
  | "guest"
  | "user"
  | "registration"
  | "workshop"
  | "finance"
  | "scientific";

export const loggedInUser: Role[] = [
  "finance",
  "user",
  "registration",
  "scientific",
  "workshop",
];

export const isAllowed = (resourceRoles: Role[], userRoles: Role[]) => {
  for (const resourceRole of resourceRoles) {
    if (userRoles.includes(resourceRole)) {
      return true;
    }
  }
  return false;
};
