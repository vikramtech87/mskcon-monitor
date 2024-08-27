import { collection, documentId, query, where } from "firebase/firestore";
import { db } from "../client";
import { fetchDocs } from "./dbUtils";
import { ProfileData } from "@/lib/types/profile-data";
import { Result } from "@/lib/types/result";
import { DbError } from "@/lib/errors/db-error";

export const fetchProfiles = async (
  userIds: string[]
): Promise<Result<ProfileData[], DbError>> => {
  const collectionRef = collection(db, "profile");
  const q = query(collectionRef, where(documentId(), "in", userIds));

  const docs = await fetchDocs<Omit<ProfileData, "id">>(q);
  return docs;
};
