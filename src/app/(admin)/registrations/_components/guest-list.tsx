import { Registration } from "@/lib/types/registration";
import React from "react";
import GuestItem from "./guest-item";

type GuestListProps = {
  data: Registration[];
};

const GuestList = ({ data }: GuestListProps) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-4xl tracking-tight font-semibold mb-2 sm:mb-4">
        Guest List
      </h2>
      <div className="flex flex-col space-y-1">
        {data.map((datum) => (
          <GuestItem key={datum.userId} data={datum} />
        ))}
      </div>
    </div>
  );
};

export default GuestList;
