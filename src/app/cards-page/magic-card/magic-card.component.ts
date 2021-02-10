import { Component, Input } from '@angular/core';
import { Card } from 'src/app/Entities/Models/card.model';


@Component({
  selector: 'app-magic-card',
  templateUrl: './magic-card.component.html'
})
export class MagicCardComponent {
  constructor() { }


  @Input() card: Card;
}
