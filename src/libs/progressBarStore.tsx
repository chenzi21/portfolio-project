import { create } from "zustand";

type ProgessBarStore = {
    progress: number;
    setProgress: (progress: number) => void;
}

const useProgressBarStore = create<ProgessBarStore>((set) => ({
    progress: 0,
    setProgress: (progress) => set({ progress })
}))

export default useProgressBarStore