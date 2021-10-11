import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface API {
	time: { updatedISO: string };
	bpi: {
		BRL: { rate_float: number };
		USD: { rate_float: number };
		EUR: { rate_float: number };
	};
}

interface Currency {
	timeISO: string;
	BRL: number;
	USD: number;
	EUR: number;
}

@Injectable()
export class CoelhoWalletService {
	public currencies: Currency[] = [];
	private lastCurrency: Currency = { timeISO: "", BRL: 0, USD: 0, EUR: 0 };
	private readonly urlBRL = "https://api.coindesk.com/v1/bpi/currentprice/BRL.json";
	private readonly urlUSDEUR = "https://api.coindesk.com/v1/bpi/currentprice.json";
	public btcBalance = 0;

	constructor(private http: HttpClient) {
		this.fetchCurrencies().then();
		setInterval(() => this.fetchCurrencies().then(), 60000);
	}

	private async fetchCurrencies() {
		const dataBRL = await this.http.get<API>(this.urlBRL).toPromise();
		const dataUSDEUR = await this.http.get<API>(this.urlUSDEUR).toPromise();
		this.lastCurrency.timeISO = dataBRL.time.updatedISO;
		this.lastCurrency.BRL = dataBRL.bpi.BRL.rate_float;
		this.lastCurrency.USD = dataUSDEUR.bpi.USD.rate_float;
		this.lastCurrency.EUR = dataUSDEUR.bpi.EUR.rate_float;
		const obj = Object.assign({}, this.lastCurrency);
		this.updateCurrencies(obj);
	}

	private updateCurrencies(obj: Currency) {
		this.currencies.push(obj);
	}

	public brlBalance() {
		const length = this.currencies.length;
		if (length > 0)
			return this.btcBalance * this.lastCurrency.BRL;
		return 0;
	}

	public usdBalance() {
		const length = this.currencies.length;
		if (length > 0)
			return this.btcBalance * this.lastCurrency.USD;
		return 0;
	}

	public eurBalance() {
		const length = this.currencies.length;
		if (length > 0)
			return this.btcBalance * this.lastCurrency.EUR;
		return 0;
	}

	public depositBTC(value: number) {
		const length = this.currencies.length;
		if (length > 0)
			this.btcBalance += value / this.lastCurrency.BRL;
	}

	public withdrawBTC(value: number) {
		const length = this.currencies.length;
		if (length > 0)
			this.btcBalance -= value / this.lastCurrency.BRL;
	}

	public isUp() {
		const length = this.currencies.length;
		if (length > 1)
			return this.lastCurrency.BRL > this.currencies[length - 2].BRL;
		return false;
	}

	public isDown() {
		const length = this.currencies.length;
		if (length > 1)
			return this.lastCurrency.BRL < this.currencies[length - 2].BRL;
		return false;
	}
}
