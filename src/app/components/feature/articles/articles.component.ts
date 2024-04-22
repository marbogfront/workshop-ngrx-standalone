import { Component } from '@angular/core';
import { HeadingComponent } from '../../ui/heading/heading.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

}
