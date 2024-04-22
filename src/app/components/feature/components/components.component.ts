import { Component } from '@angular/core';
import { HeadingComponent } from '@ui/heading/heading.component';
import { CollapsibleComponent } from '@ui/collapsible/collapsible.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [HeadingComponent, CollapsibleComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  toggleInfo = false;

  toggle(): void {
    this.toggleInfo = !this.toggleInfo;
  }
}
