"use client";

import CenterSpinner from "@/components/center-spinner";
import WithAuth, { WithAuthProps } from "@/hooks/withAuth";
import { Registration } from "@/lib/types/registration";
import { db } from "@/services/firebase/client";
import { fetchRegistrations } from "@/services/firebase/database/registrations";
import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import GuestList from "./_components/guest-list";
import WorkshopList from "./_components/workshop-list";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

type RegistrationsPageProps = {} & WithAuthProps;

const RegistrationsPage = ({ auth }: RegistrationsPageProps) => {
  const [registrations, setRegistrations] = useState<
    Registration[] | undefined
  >(undefined);
  useEffect(() => {
    const executeOnMount = async () => {
      const result = await fetchRegistrations();
      if (result.ok) {
        setRegistrations(result.value);
      }
      console.log(result);
    };

    executeOnMount();
  }, [setRegistrations]);

  if (registrations === undefined) {
    return <CenterSpinner />;
  }

  return (
    <div>
      <h1 className="text-4xl sm:text-6xl font-light tracking-tight sm:tracking-tighter mb-6 sm:mb-8">
        Registrations
      </h1>
      <Tabs defaultValue="guests">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="guests">Guests</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>{" "}
        </TabsList>
        <TabsContent value="guests">
          <GuestList data={registrations!} />
        </TabsContent>
        <TabsContent value="workshops">
          <WorkshopList data={registrations!} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const PageWithAuth = WithAuth(RegistrationsPage, ["registration"]);
export default PageWithAuth;
