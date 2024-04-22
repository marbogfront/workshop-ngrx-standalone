import { Component, inject } from '@angular/core';
import { HeadingComponent } from '../../ui/heading/heading.component';
import { CollapsibleComponent } from '@ui/collapsible/collapsible.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { toggleInfo } from './state/dashboard.actions';
import { selectToggleInfo } from './state/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeadingComponent, CollapsibleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  store = inject(Store);

  toggleInfo$ = this.store.select(selectToggleInfo);

  toggle(): void {
    this.store.dispatch(toggleInfo());
  }
}
