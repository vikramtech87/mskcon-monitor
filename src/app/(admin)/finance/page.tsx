"use client";

import WithAuth, { WithAuthProps } from "@/hooks/withAuth";
import React from "react";

type FinancePageProps = {} & WithAuthProps;

const FinancePage = ({ auth }: FinancePageProps) => {
  return <div>FinancePage</div>;
};

export default WithAuth(FinancePage, ["finance"]);
