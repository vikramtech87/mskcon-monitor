import { DbError, DbErrorCode } from "@/lib/errors/db-error";
import { Result } from "@/lib/types/result";
import { FirebaseError } from "firebase/app";
import { DocumentData, getDocs, Query } from "firebase/firestore";

export const fetchDocs = async <T>(
  q: Query<DocumentData, DocumentData>
): Promise<Result<Map<string, T>, DbError>> => {
  try {
    const querySnapshot = await getDocs(q);
    let docs = new Map<string, T>();
    querySnapshot.forEach((doc) => {
      const data = doc.data() as T;
      docs.set(doc.id, data);
    });
    return {
      ok: true,
      value: docs,
    };
  } catch (error) {
    let errorCode: DbErrorCode = "db/unknown";
    if (error instanceof FirebaseError) {
      errorCode = "db/firebase-error";
    }
    console.error(error);
    return {
      ok: false,
      error: new DbError(errorCode),
    };
  }
};
