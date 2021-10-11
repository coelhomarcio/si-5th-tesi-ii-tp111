import { Component } from "@angular/core";

import { CoelhoWalletService } from "../coelho-wallet.service";

@Component({
	selector:    "app-coelho-wallet",
	templateUrl: "./coelho-wallet.component.html"
})
export class CoelhoWalletComponent {
	constructor(public wallet: CoelhoWalletService) {
	}
}
