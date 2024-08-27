import { Registration } from "@/lib/types/registration";
import React from "react";
import WorkshopItem from "./workshop-item";

type WorkshopListProps = {
  data: Registration[];
};

const WorkshopList = ({ data }: WorkshopListProps) => {
  const fishList = data
    .filter((datum) => datum.workshop.workshopId === "ws-fish")
    .map((datum) => ({
      firstName: datum.profile.firstName,
      lastName: datum.profile.lastName,
    }));

  const pcrList = data
    .filter((datum) => datum.workshop.workshopId === "ws-pcr")
    .map((datum) => ({
      firstName: datum.profile.firstName,
      lastName: datum.profile.lastName,
    }));

  return (
    <div>
      <h2 className="text-2xl sm:text-4xl tracking-tight font-semibold mb-2 sm:mb-4">
        Workshop List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="border overflow-clip rounded shadow-xs">
          <div className="border-t-[6px] border-orange-500 pt-4 px-4 pb-2">
            <h3 className="text-xl sm:text-2xl tracking-tight font-semibold mb-2 sm:mb-4">
              FISH
            </h3>
            {fishList.map((value, index) => (
              <WorkshopItem
                key={index}
                index={index + 1}
                name={`${value.firstName} ${value.lastName}`}
              />
            ))}
          </div>
        </div>

        <div className="border overflow-clip rounded shadow-xs">
          <div className="border-t-[6px] border-purple-500 pt-4 px-4 pb-2">
            <h3 className="text-xl sm:text-2xl tracking-tight font-semibold mb-2 sm:mb-4">
              PCR
            </h3>
            {pcrList.map((value, index) => (
              <WorkshopItem
                key={index}
                index={index + 1}
                name={`${value.firstName} ${value.lastName}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopList;
