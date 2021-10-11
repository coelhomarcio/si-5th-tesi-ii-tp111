import { Component } from '@angular/core';
import { CoelhoWalletService } from './coelho-wallet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public wallet: CoelhoWalletService) {
  }
}
