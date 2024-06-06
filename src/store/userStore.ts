import { UserData } from "@/services/Request/User";

export type StateProps = {
  user: UserData;
  setUser: (user: UserData) => void;
  reset: () => void;
};

export const USER_INITIAL_VALUES = {
  id: "",
  token: "",
  first_name: "",
  last_name: "",
  email: "",
};

export const userStore = (set) => ({
  user: USER_INITIAL_VALUES,
  setUser: (user: UserData) =>
    set(() => ({
      user: user,
    })),
  reset: () => {
    set({
      user: USER_INITIAL_VALUES,
    });
  },
});
