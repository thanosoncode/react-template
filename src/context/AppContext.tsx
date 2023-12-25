import React, { useReducer } from "react";

export type AppState = {
  count: number;
};

const defaultState: AppState = {
  count: 0,
};

export type Action =
  | { type: "COUNTER_INCREASE" }
  | { type: "COUNTER_DECREASE" }
  | { type: "COUNTER_RESET" };

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "COUNTER_INCREASE": {
      return { ...state, count: state.count + 1 };
    }
    case "COUNTER_DECREASE": {
      return { ...state, count: state.count - 1 };
    }
    case "COUNTER_RESET": {
      return { ...state, count: 0 };
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

type Dispatch = (action: Action) => void;
type AppProviderProps = {
  children: React.ReactNode;
};

const AppStateContext = React.createContext<AppState | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
