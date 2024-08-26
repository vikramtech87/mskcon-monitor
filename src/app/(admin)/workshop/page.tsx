"use client";

import WithAuth, { WithAuthProps } from "@/hooks/withAuth";
import React from "react";

type WorkshopPageProps = {} & WithAuthProps;

const WorkshopPage = ({ auth }: WorkshopPageProps) => {
  return <div>WorkshopPage</div>;
};

export default WithAuth(WorkshopPage, ["workshop"]);
