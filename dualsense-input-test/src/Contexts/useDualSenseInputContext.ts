import { useContext } from "react";
import { DualSenseInputContext } from "./DualSenseInputContext";

export const useDualSenseInputContext = () => {
    const context = useContext(DualSenseInputContext);
    if (context === undefined) {
        throw new Error("DualSenseInput error. Did you wrap <DualSenseInputProvider> around <app/> in App.tsx?");
    }
    return context;
};