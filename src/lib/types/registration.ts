import { MealData } from "./meal-data";
import { ProfileData } from "./profile-data";
import { WorkshopData } from "./workshop-data";

export type Registration = {
  userId: string;
  profile: ProfileData;
  workshop: WorkshopData;
  meal: MealData;
};
