"use client";

import { type Resource } from "@/lib/types/resource";
import { isAllowed, type Role } from "@/lib/types/user-role";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const resources: Resource[] = [
  {
    label: "Registrations",
    url: "/registrations",
    allowedRoles: ["registration"],
  },
  {
    label: "Workshop",
    url: "/workshop",
    allowedRoles: ["workshop"],
  },
  {
    label: "Finance",
    url: "/finance",
    allowedRoles: ["finance"],
  },
];

type MainNavigationProps = {
  userRoles: Role[];
  isMenuExpanded: boolean;
};

const MainNavigation = ({ userRoles, isMenuExpanded }: MainNavigationProps) => {
  const currentPath = usePathname();
  const filtered = resources.filter((res) =>
    isAllowed(res.allowedRoles, userRoles)
  );

  const listClassList = clsx({
    hidden: !isMenuExpanded,
    flex: isMenuExpanded,
    "sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 sm:items-center text-sm sm:text-xs":
      true,
  });

  return (
    <ul className={listClassList}>
      {filtered.map((res) => {
        const isActive = res.url === currentPath;
        const itemClassList = clsx({
          "block py-1 hover:text-foreground font-semibold hover:cursor-pointer":
            true,
          "text-muted-foreground": !isActive,
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

export default MainNavigation;
