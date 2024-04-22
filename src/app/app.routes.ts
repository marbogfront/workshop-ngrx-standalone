import { Routes } from '@angular/router';
import { DashboardComponent } from './components/feature/dashboard/dashboard.component';
import { ComponentsComponent } from './components/feature/components/components.component';
import { ArticlesComponent } from './components/feature/articles/articles.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
];
