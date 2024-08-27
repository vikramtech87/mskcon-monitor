import { DbError, DbErrorCode } from "@/lib/errors/db-error";
import { Result } from "@/lib/types/result";
import { FirebaseError } from "firebase/app";
import { DocumentData, getDocs, Query } from "firebase/firestore";

export const fetchDocs = async <T>(
  q: Query<DocumentData, DocumentData>
): Promise<Result<(T & { id: string })[], DbError>> => {
  try {
    const querySnapshot = await getDocs(q);
    let docs: (T & { id: string })[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as T;
      docs.push({ ...data, id: doc.id });
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
