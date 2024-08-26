import { MealPreference } from "./meal-preference";

export type MealDataWithoutId = {
  preference: MealPreference;
};

export type MealData = {
  userId: string;
} & MealDataWithoutId;
