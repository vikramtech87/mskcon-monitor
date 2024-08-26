"use client";

import { AuthState } from "@/lib/types/auth-state";
import { isAllowed, Role } from "@/lib/types/user-role";
import React, { useEffect } from "react";
import { useAppStore } from "./useAppStore";
import { useRouter } from "next/navigation";
import CenterSpinner from "@/components/center-spinner";

export type WithAuthProps = {
  auth: AuthState;
};

const WithAuth = <P extends object>(
  Component: React.ComponentType<P & WithAuthProps>,
  allowedRoles: Role[]
): React.ComponentType<P> => {
  const ComponentWithAuth = (props: P) => {
    const { isLoaded, authState } = useAppStore((store) => store.authStore);
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && authState === undefined) {
        router.push("/");
        router.refresh();
        return;
      }

      if (isLoaded && authState !== undefined) {
        const { userRoles } = authState;
        if (!isAllowed(allowedRoles, userRoles)) {
          router.push("/");
          router.refresh();
          return;
        }
      }
    }, [router, authState, isLoaded]);

    if (!isLoaded) {
      return <CenterSpinner />;
    }

    if (authState === undefined) {
      return <CenterSpinner />;
    }

    return <Component {...(props as P)} auth={authState} />;
  };
  return ComponentWithAuth;
};

export default WithAuth;
