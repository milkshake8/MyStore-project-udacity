import { Component, Input, OnInit } from '@angular/core';
import { CartingService } from 'src/app/services/carting.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() name: string = '';
  @Input() total: number = 0;

  constructor(private cartingService: CartingService) {}

  ngOnInit(): void {}

  clearCart(): void {
    this.cartingService.clearCart();
  }
}
