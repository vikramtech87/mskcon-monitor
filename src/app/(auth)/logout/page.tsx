"use client";

import WithAuth, { WithAuthProps } from "@/hooks/withAuth";
import { logout } from "@/services/firebase/authentication";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type LogOutPageProps = {} & WithAuthProps;

const LogOutPagge = (props: LogOutPageProps) => {
  const router = useRouter();

  useEffect(() => {
    const executeOnMount = async () => {
      const _ = await logout();
      router.push("/");
      router.refresh();
    };

    executeOnMount();
  }, [router]);

  return null;
};

export default WithAuth(LogOutPagge, [
  "user",
  "finance",
  "registration",
  "scientific",
  "workshop",
]);
