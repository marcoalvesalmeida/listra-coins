import { UserData } from "@/services/Request/User";

export type StateProps = {
  user: UserData;
  setUser: (user: UserData) => void;
  reset: () => void;
};

export const USER_INITIAL_VALUES: UserData = {
  id: "",
  token: "",
  first_name: "",
  last_name: "",
  email: "",
  balance: 0,
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
