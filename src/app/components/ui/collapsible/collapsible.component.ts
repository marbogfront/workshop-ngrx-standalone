import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  standalone: true,
  imports: [],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss'
})
export class CollapsibleComponent {
  @Input() header: string = '';
  @Input() toggleInfo: boolean = false;
  @Input() width: string = '';
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
}
