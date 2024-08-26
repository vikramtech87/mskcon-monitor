import { LoginError, LoginErrorCode } from "@/lib/errors/auth-error";
import { promiseToResult, Result } from "@/lib/types/result";
import {
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { auth } from "./client";
import { FirebaseError } from "firebase/app";

export const login = async (
  email: string,
  password: string
): Promise<Result<UserCredential, LoginError>> => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return {
      ok: true,
      value: user,
    };
  } catch (error) {
    let errorCode: LoginErrorCode = "unknown";

    if (error instanceof FirebaseError) {
      const invalidCredentialsErrorCodes = [
        "auth/invalid-credential",
        "auth/user-not-found",
        "auth/wrong-password",
      ];
      if (invalidCredentialsErrorCodes.includes(error.code)) {
        errorCode = "auth/invalid-credential";
      } else {
        errorCode = "auth/unknown";
        console.error(`Unknown firebase login error: ${error}`);
      }
    } else {
      console.error(`Unknown login error: ${error}`);
    }

    return {
      ok: false,
      error: new LoginError(errorCode),
    };
  }
};

export const logout = async (): Promise<Result<void>> =>
  promiseToResult(signOut(auth));
