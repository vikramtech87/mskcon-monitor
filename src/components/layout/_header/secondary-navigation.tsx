import { type Resource } from "@/lib/types/resource";
import { isAllowed, loggedInUser, type Role } from "@/lib/types/user-role";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SecondaryNavigationProps = {
  isMenuExpanded: boolean;
  userRoles: Role[];
};

const resources: Resource[] = [
  {
    label: "Log In",
    url: "/login",
    allowedRoles: ["guest"],
  },
  {
    label: "Log Out",
    url: "/logout",
    allowedRoles: loggedInUser,
  },
];

const SecondaryNavigation = ({
  isMenuExpanded,
  userRoles,
}: SecondaryNavigationProps) => {
  const filtered = resources.filter((res) =>
    isAllowed(res.allowedRoles, userRoles)
  );
  const currentPath = usePathname();

  const listClassList = clsx({
    hidden: !isMenuExpanded,
    flex: isMenuExpanded,
    "sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-sm sm:text-xs":
      true,
  });

  return (
    <ul className={listClassList}>
      {filtered.map((res) => {
        const isActive = res.url === currentPath;
        const itemClassList = clsx({
          "block py-1 font-semibold hover:cursor-pointer": true,
          "text-muted-foreground hover:text-foreground": !isActive,
          "text-foreground": isActive,
        });
        return (
          <li key={res.label}>
            <Link href={res.url} className={itemClassList}>
              {res.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SecondaryNavigation;
