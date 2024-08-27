import { Timestamp } from "firebase/firestore";
import { TransactionMode } from "./transaction-mode";
import { TransactionStatus } from "./transaction-status";

export type TransactionData = {
  amount: number;
  authId: string;
  bankId: string;
  createdAt: Timestamp;
  mode: TransactionMode;
  registrationNumber: string;
  result: string;
  transactionId: string;
  transactionStatus: TransactionStatus;
  updatedAt: Timestamp;
  userId: string;
  id: string;
};
