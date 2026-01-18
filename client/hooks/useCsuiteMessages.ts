import { useMemo } from "react";
import cSuiteData from "@/data/cSuiteMessages.json";

export interface CsuiteMessage {
  name: string;
  role: string;
  message: string;
}

export const useCsuiteMessages = () => {
  return useMemo(() => {
    return cSuiteData as Record<string, CsuiteMessage>;
  }, []);
};

export const getCsuiteMessage = (key: string): CsuiteMessage | null => {
  const data = cSuiteData as Record<string, CsuiteMessage>;
  return data[key] || null;
};
