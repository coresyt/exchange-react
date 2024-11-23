import currencys from '@lib/currency';

export interface ExchangeCurrencyType {
	success: boolean;
	query: {
		from: keyof typeof currencys | string;
		to: keyof typeof currencys | string;
		amount: number;
	};
	info: {
		timestamp: number;
		rate: number;
	};
	date: `${year}-${month}-${day}`;
	result: number;
}
