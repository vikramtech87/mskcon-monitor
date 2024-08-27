import { Timestamp } from "firebase/firestore";
import { MealPreference } from "./meal-preference";

export type MealData = {
  createdAt: Timestamp;
  preference: MealPreference;
  updatedAt: Timestamp;
  id: string;
};
