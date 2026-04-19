"use client";

import { create } from "zustand";

type StudioState = {
  selectedFileName: string;
  status: string;
  result: unknown;
  setFileName: (name: string) => void;
  setStatus: (status: string) => void;
  setResult: (result: unknown) => void;
};

export const useStudioStore = create<StudioState>((set) => ({
  selectedFileName: "",
  status: "Idle",
  result: null,
  setFileName: (name) => set({ selectedFileName: name }),
  setStatus: (status) => set({ status }),
  setResult: (result) => set({ result })
}));
