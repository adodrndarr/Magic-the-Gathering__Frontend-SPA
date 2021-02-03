import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Entities/Models/card.model';


@Component({
  selector: 'app-magic-card',
  templateUrl: './magic-card.component.html'
})
export class MagicCardComponent implements OnInit {
  constructor() { }

  @Input() card: Card;

  ngOnInit() {
  }

}
