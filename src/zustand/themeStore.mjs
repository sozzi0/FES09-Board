import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTemeStore = create(
  persist(
    (set) => ({
      isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
      toggleTeme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "dark-mode",
      storeage: createJSONStorage(() => localStorage), //생략시 기본값: localStoreage
    }
  )
);

export default useTemeStore;
