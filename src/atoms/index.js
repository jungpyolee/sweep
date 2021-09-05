import { atom } from "recoil";

export const nicknameAtom = atom({
  key: "nicknameAtom",
  default: null,
});

export const teamIdAtom = atom({
  key: "teamIdAtom",
  default: null,
});

export const uidAtom = atom({
  key: "uidAtom",
  default: null,
});

export const isAuthAtom = atom({
  key: "isAuthAtom",
  default: false,
});

export const currentUserAtom = atom({
  key: "currentUserAtom",
  default: null,
});
