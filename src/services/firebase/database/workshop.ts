import { DbError } from "@/lib/errors/db-error";
import { Result } from "@/lib/types/result";
import { WorkshopData } from "@/lib/types/workshop-data";
import { collection, documentId, query, where } from "firebase/firestore";
import { db } from "../client";
import { fetchDocs } from "./dbUtils";

export const fetchWorkshops = async (
  userIds: string[]
): Promise<Result<Map<string, WorkshopData>, DbError>> => {
  const collectionRef = collection(db, "workshop");
  const q = query(collectionRef, where(documentId(), "in", userIds));

  const docs = await fetchDocs<WorkshopData>(q);
  return docs;
};
