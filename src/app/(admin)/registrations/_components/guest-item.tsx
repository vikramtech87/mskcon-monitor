import { Registration } from "@/lib/types/registration";
import clsx from "clsx";
import React from "react";

type GuestItemProps = {
  data: Registration;
};

const GuestItem = ({ data }: GuestItemProps) => {
  const { profile } = data;
  const { firstName, lastName, email, college, designation } = profile;

  const name = `${firstName} ${lastName}`;

  const itemClassList = clsx({
    "grid grid-cols-1 sm:grid-cols-5 items-center border-l-[6px] pl-4 py-2 pr-2":
      true,
    "border-orange-500": designation === "postgraduate",
    "border-purple-500": designation === "consultant",
  });

  return (
    <>
      <div className="border rounded shadow-xs overflow-clip">
        <div className={itemClassList}>
          <div className="sm:col-span-2">
            <div className="text-sm font-semibold">
              {name.toLocaleUpperCase()}
            </div>
            <div className="text-sm text-muted-foreground">{email}</div>
          </div>
          <div className="text-sm text-muted-foreground sm:col-span-2">
            {college}
          </div>
          <div className="text-sm capitalize font-medium">{designation}</div>
        </div>
      </div>
    </>
  );
};

export default GuestItem;
