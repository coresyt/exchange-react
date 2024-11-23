import { ExchangeCurrencyType } from '../types';
import currencys from './currency';

const getCurrency = async (
	from: keyof typeof currencys,
	to: keyof typeof currencys,
	count: number
): Promise<ExchangeCurrencyType> => {
	const api_key = import.meta.env.VITE_API_KEY;

	const res = await fetch(
		`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${count}`,
		{
			headers: {
				'x-rapidapi-key': api_key
			}
		}
	);

	const json = (await res.json()) as ExchangeCurrencyType;

	return json;
};

export default getCurrency;
