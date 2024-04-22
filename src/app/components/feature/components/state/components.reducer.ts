import { createReducer, on } from "@ngrx/store";
import { showHideInfo } from "./components.actions";

export type ComponentsState = {
  showHideInfo: boolean;
};

const initialState: ComponentsState = {
  showHideInfo: false
}

export const componentsReducer = createReducer(
  initialState,
  on(showHideInfo, (state: ComponentsState) => ({...state, showHideInfo: !state.showHideInfo }))
);
