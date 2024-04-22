import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { dashboardReducer } from './components/feature/dashboard/state/dashboard.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({
      name: 'dashboard',
      reducer: dashboardReducer
    })
  ]
};
