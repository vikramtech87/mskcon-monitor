import { AuthState } from "@/lib/types/auth-state";
import { Role } from "@/lib/types/user-role";
import { User } from "firebase/auth";
import { create } from "zustand";

type AuthStore = {
  isLoaded: boolean;
  authState?: AuthState;
};

type AppStore = {
  authStore: AuthStore;
  setAuth: (state?: AuthState) => void;
};

export const useAppStore = create<AppStore>()((set) => ({
  authStore: {
    isLoaded: false,
    authState: undefined,
  },
  setAuth: (state?: AuthState) => {
    set(() => ({
      authStore: {
        isLoaded: true,
        authState: state,
      },
    }));
  },
}));
