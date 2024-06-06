import { StateProps, userStore } from "@/store/userStore";
import { create } from "zustand";

const useUserStore = create<StateProps>(userStore);

export default useUserStore;
