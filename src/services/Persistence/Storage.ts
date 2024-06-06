import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "../Request/User";
import { TRANSACTION_KEY, USER_KEY } from "./keys";
import { USER_INITIAL_VALUES } from "@/store/userStore";
import { TRANSACTIONS_INITIAL_VALUE } from "@/store/transactionsStore";
import { TransactionData } from "../Request/Transactions";

export async function saveUser(user: UserData): Promise<boolean> {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return true;
  } catch {
    return false;
  }
}

export async function loadUser(): Promise<UserData> {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return JSON.parse(data);
  } catch {
    return USER_INITIAL_VALUES;
  }
}

export async function removeUser(): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(USER_KEY);
    return true;
  } catch {
    return false;
  }
}

export async function saveTransactions(
  transactions: TransactionData[],
): Promise<boolean> {
  try {
    await AsyncStorage.setItem(TRANSACTION_KEY, JSON.stringify(transactions));
    return true;
  } catch {
    return false;
  }
}

export async function loadTransactions(): Promise<TransactionData[]> {
  try {
    const data = await AsyncStorage.getItem(TRANSACTION_KEY);
    return JSON.parse(data);
  } catch {
    return TRANSACTIONS_INITIAL_VALUE;
  }
}

export async function removeTransactions(): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(TRANSACTION_KEY);
    return true;
  } catch {
    return false;
  }
}
