import { Component, Input, OnInit } from '@angular/core';
import { cards } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardDetails:any;
  constructor() { }

  ngOnInit(): void {
  }

}
