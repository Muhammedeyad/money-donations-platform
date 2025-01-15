import { create } from 'zustand';

export const useUserZustands = create((set) => ({
    selectedCampaign: "", // Initial state
    setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }) // Correctly updating `selectedCampaign`
}));
