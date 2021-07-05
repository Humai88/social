import React from "react";
import store, { StoreType } from "./redux/reduxStore";
type ContexType = any;
export const StoreContext: ContexType = React.createContext({ store: store });
