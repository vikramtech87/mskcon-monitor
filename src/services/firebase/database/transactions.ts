import { DbError } from "@/lib/errors/db-error";
import { Result } from "@/lib/types/result";
import { TransactionData } from "@/lib/types/transaction-data";
import {
  collection,
  DocumentData,
  Query,
  query,
  where,
} from "firebase/firestore";
import { db } from "../client";
import { fetchDocs } from "./dbUtils";

export const fetchTransactions = async (
  onlySuccess: boolean
): Promise<Result<Map<string, TransactionData>, DbError>> => {
  const ref = collection(db, "transactions");

  let q: Query<DocumentData, DocumentData>;
  if (onlySuccess) {
    q = query(ref, where("transactionStatus", "==", "SUCCESS"));
  } else {
    q = query(ref);
  }

  const docs = await fetchDocs<TransactionData>(q);
  return docs;
};
