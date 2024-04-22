import { Component } from '@angular/core';
import { HeadingComponent } from '../../ui/heading/heading.component';
import { CollapsibleComponent } from '@ui/collapsible/collapsible.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeadingComponent, CollapsibleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  toggleInfo = false;

  toggle(): void {
    this.toggleInfo = !this.toggleInfo;
  }
}
