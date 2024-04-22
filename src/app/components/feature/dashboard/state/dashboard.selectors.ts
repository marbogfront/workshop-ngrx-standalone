import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardState } from "./dashboard.reducer";

const selectDashboard = createFeatureSelector<DashboardState>('dashboard');

export const selectToggleInfo = createSelector(
  selectDashboard,
  (state: DashboardState) => state.toggleInfo
);
