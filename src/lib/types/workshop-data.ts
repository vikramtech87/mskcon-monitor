import { Timestamp } from "firebase/firestore";
import { WorkshopType } from "./workshop-type";

export type WorkshopData = {
  confirmed: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  workshopId: WorkshopType;
  id: string;
};
