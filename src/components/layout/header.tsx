"use client";

import React, { useEffect, useState } from "react";
import Branding from "./_header/branding";
import { Role } from "@/lib/types/user-role";
import MainNavigation from "./_header/main-navigation";
import SecondaryNavigation from "./_header/secondary-navigation";
import { useAppStore } from "@/hooks/useAppStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase/client";
import { Loader2 } from "lucide-react";

const Header = () => {
  const { authStore, setAuth } = useAppStore();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser === null) {
        setAuth(undefined);
      } else {
        const token = await authUser.getIdTokenResult();
        let roles: Role[] = ["user"];
        if (token.claims.roles !== undefined) {
          roles = token.claims.roles as Role[];
        }

        setAuth({
          authUser,
          userRoles: roles,
        });
      }
    });

    return () => unsubscribe();
  }, [setAuth]);

  let currentRoles: Role[] = ["guest"];
  if (authStore.authState !== undefined) {
    const { userRoles } = authStore.authState;
    currentRoles = userRoles;
  }

  return (
    <nav className="bg-muted border-b shadow">
      <div className="container py-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-between sm:items-center">
        <Branding setIsMenuExpanded={setIsMenuExpanded} />
        {!authStore.isLoaded && (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        )}
        {authStore.isLoaded && (
          <>
            <MainNavigation
              userRoles={currentRoles}
              isMenuExpanded={isMenuExpanded}
            />
            <SecondaryNavigation
              userRoles={currentRoles}
              isMenuExpanded={isMenuExpanded}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
