import React from "react";

type WorkshopItemProps = {
  index: number;
  name: string;
};

const WorkshopItem = ({ index, name }: WorkshopItemProps) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="text-right">{index}.</div>
      <div className="col-span-7">{name}</div>
    </div>
  );
};

export default WorkshopItem;
