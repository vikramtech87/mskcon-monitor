import { DbError } from "@/lib/errors/db-error";
import { MealData } from "@/lib/types/meal-data";
import { Result } from "@/lib/types/result";
import { collection, documentId, query, where } from "firebase/firestore";
import { db } from "../client";
import { fetchDocs } from "./dbUtils";

export const fetchMeals = async (
  userIds: string[]
): Promise<Result<MealData[], DbError>> => {
  const collectionRef = collection(db, "meal");
  const q = query(collectionRef, where(documentId(), "in", userIds));

  const docs = await fetchDocs<Omit<MealData, "id">>(q);
  return docs;
};
