import { AuthData } from "../types";
import { atomWithStorage } from "jotai/utils";
import { JOTAI_LOCAL_STORAGE_KEY } from "@/constants";

export const authAtom = atomWithStorage<AuthData | undefined>(
  JOTAI_LOCAL_STORAGE_KEY.AUTH,
  undefined
);
