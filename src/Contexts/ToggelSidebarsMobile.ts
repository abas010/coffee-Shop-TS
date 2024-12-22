import { createContext, Dispatch, SetStateAction } from "react";

interface states {
  isShowNavMobile: boolean;
  isShowCartMobile: boolean;
  setIsShowNavMobile: Dispatch<SetStateAction<boolean>>;
  setIsShowCartMobile: Dispatch<SetStateAction<boolean>>;
}

const toggelContext = createContext<states | null>(null);

export default toggelContext;
