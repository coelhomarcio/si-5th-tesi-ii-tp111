import { NgModule }         from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { RouterModule }     from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent }            from "./app.component";
import { CoelhoCurrencyComponent } from "./coelho-currency/coelho-currency.component";
import { CoelhoWalletComponent }   from "./coelho-wallet/coelho-wallet.component";

import { CoelhoWalletService } from "./coelho-wallet.service";

@NgModule({
	imports:      [
		BrowserModule,
		RouterModule.forRoot(
			[
				{ path: "", redirectTo: "currency", pathMatch: "full" },
				{ path: "currency", component: CoelhoCurrencyComponent },
				{ path: "wallet", component: CoelhoWalletComponent }
			]
		),
		HttpClientModule
	],
	declarations: [
		AppComponent,
		CoelhoCurrencyComponent,
		CoelhoWalletComponent
	],
	bootstrap:    [AppComponent],
	providers:    [CoelhoWalletService]
})
export class AppModule {
}
