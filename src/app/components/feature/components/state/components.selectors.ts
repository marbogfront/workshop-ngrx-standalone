import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ComponentsState } from "./components.reducer";

const selectComponents = createFeatureSelector<ComponentsState>('components');

export const selectShowHideInfo = createSelector(
  selectComponents,
  (state: ComponentsState) => state.showHideInfo
);
