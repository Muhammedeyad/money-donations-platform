import { create } from 'zustand';

export const useAdminZustand = create((set) => ({
  selectedTab: "dashboard",
  setSelectedTab: (selectedTab) => set({ selectedTab })
}));

