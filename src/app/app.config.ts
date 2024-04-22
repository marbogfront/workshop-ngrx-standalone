import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { dashboardReducer } from './components/feature/dashboard/state/dashboard.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { componentsReducer } from './components/feature/components/state/components.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({
        name: 'dashboard',
        reducer: dashboardReducer
    }),
    provideState({
      name: 'components',
      reducer: componentsReducer
  }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
