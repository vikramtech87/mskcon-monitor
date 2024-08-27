import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./client";
import { TransactionData } from "@/lib/types/transaction-data";

export const getRegistrations = async () => {
  const transactionsRef = collection(db, "transactions");

  try {
    // Fetch successful transactions
    const okTransactionsQuery = query(
      transactionsRef,
      where("transactionStatus", "==", "SUCCESS")
    );
    const okTransactionsQuerySnapshot = await getDocs(okTransactionsQuery);
    let okTransactions: TransactionData[] = [];
    okTransactionsQuerySnapshot.forEach((doc) => {
      const data = doc.data() as TransactionData;
      okTransactions.push(data);
    });

    // Fetch UserIds of successful transactions
    const userIds = okTransactions.map((t) => t.userId);

    // Fetch profile of
  } catch (error) {}
};
