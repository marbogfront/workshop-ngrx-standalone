import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeadingComponent } from '@ui/heading/heading.component';
import { CollapsibleComponent } from '@ui/collapsible/collapsible.component';
import { Store } from '@ngrx/store';
import { showHideInfo } from './state/components.actions';
import { selectShowHideInfo } from './state/components.selectors';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, HeadingComponent, CollapsibleComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  store = inject(Store);

  toggleInfo$ = this.store.select(selectShowHideInfo);

  toggle(): void {
    this.store.dispatch(showHideInfo());
  }
}
