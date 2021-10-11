import { Component } from "@angular/core";

import { CoelhoWalletService } from "../coelho-wallet.service";

@Component({
	selector:    "app-coelho-currency",
	templateUrl: "./coelho-currency.component.html"
})
export class CoelhoCurrencyComponent {
	constructor(public wallet: CoelhoWalletService) {
	}
}
