"use client";

import WithAuth, { WithAuthProps } from "@/hooks/withAuth";
import { db } from "@/services/firebase/client";
import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect } from "react";

type RegistrationsPageProps = {} & WithAuthProps;

const RegistrationsPage = ({ auth }: RegistrationsPageProps) => {
  return <div>RegistrationsPage</div>;
};

const PageWithAuth = WithAuth(RegistrationsPage, ["registration"]);
export default PageWithAuth;
