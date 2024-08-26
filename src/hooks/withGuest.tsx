"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "./useAppStore";
import { Component, useEffect } from "react";
import CenterSpinner from "@/components/center-spinner";

const WithGuest = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const OnlyGuest: React.FC<P> = (props: P) => {
    const { isLoaded, authState } = useAppStore((store) => store.authStore);

    const router = useRouter();
    useEffect(() => {
      if (isLoaded && authState !== undefined) {
        router.push("/");
        router.refresh();
      }
    }, [isLoaded, authState, router]);

    if (!isLoaded) {
      return <CenterSpinner />;
    }

    if (isLoaded && authState !== undefined) {
      return <CenterSpinner />;
    }

    return <Component {...(props as P)} />;
  };

  return OnlyGuest;
};

export default WithGuest;
