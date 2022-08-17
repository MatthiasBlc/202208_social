import { atom } from "jotai";

export const userNameAtom = atom("");
export const userEmailAtom = atom("");
export const userPasswordAtom = atom("");

export const fullUserInfoAtom = atom((get) => {
  const userName = get(userNameAtom);
  const userEmail = get(userEmailAtom);
  return userName + " " + userEmail;
});
