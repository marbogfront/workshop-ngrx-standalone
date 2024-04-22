import { createReducer, on } from "@ngrx/store";
import { toggleInfo } from "./dashboard.actions";

export type DashboardState = {
  toggleInfo: boolean;
};

const initialState: DashboardState = {
  toggleInfo: false
}

export const dashboardReducer = createReducer(
  initialState,
  on(toggleInfo, (state: DashboardState) => ({...state, toggleInfo: !state.toggleInfo }))
);
