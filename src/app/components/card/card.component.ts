import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  cover: string = ""
  @Input()
  label: string = ""
  @Input()
  type: string = "XPTO | PS4"
  @Input()
  price: string = "R$ 399,90"

}
