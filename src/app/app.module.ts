import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoelhoCurrencyComponent } from './coelho-currency/coelho-currency.component';
import { CoelhoWalletComponent } from './coelho-wallet/coelho-wallet.component';
import { HttpClientModule } from '@angular/common/http';
import { CoelhoWalletService } from './coelho-wallet.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: CoelhoCurrencyComponent },
        { path: 'currency', component: CoelhoCurrencyComponent },
        { path: 'wallet', component: CoelhoWalletComponent }
      ]
    ),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CoelhoCurrencyComponent,
    CoelhoWalletComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ CoelhoWalletService ]
})
export class AppModule {
}
