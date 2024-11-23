import { type MouseEventHandler, useState } from 'react';
import getCurrency from '../lib/getCurrency';
import currencys from '../lib/currency';
import '../css/Form.css';

export default function Form() {
	const [from, setFrom] = useState<keyof typeof currencys>('MXN');
	const [to, setTo] = useState<keyof typeof currencys>('USD');
	const [fromCount, setFromCount] = useState<number>(0);
	const [toCount, setToCount] = useState<number>(0);

	const handleClickGet: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault();
		const toCurrency = await getCurrency(from, to, fromCount);
		const { result } = toCurrency;
		setToCount(result);
	};

	const handleClickInvert: MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault();
		const toCurrency = await getCurrency(to, from, fromCount);
		const { result } = toCurrency;
		setToCount(result);
		const fromS = from;
		setFrom(to);
		setTo(fromS);
	};

	return (
		<form className="form-container">
			<div>
				<label htmlFor="fromCurrency">
					Select the from currency and enter count
					<select
						name="fromCurrency"
						value={from}
						onChange={(e) => setFrom(e.currentTarget.value as keyof typeof currencys)}
					>
						{Object.entries(currencys).map(([key, val], i) => {
							if (key === to) return;

							return (
								<option key={key} value={key}>
									<span>{i.toString()}</span> - {val}
								</option>
							);
						})}
					</select>
					<input
						type="number"
						max={100000000}
						value={fromCount}
						onChange={(e) => setFromCount(Number(e.currentTarget.value))}
					/>
				</label>
				<label htmlFor="toCurrency">
					Select the to currency
					<select
						name="toCurrency"
						value={to}
						onChange={(e) => setTo(e.currentTarget.value as keyof typeof currencys)}
					>
						{Object.entries(currencys).map(([key, val], i) => {
							if (key === from) return;

							return (
								<option key={key} value={key}>
									<span>{i.toString()}</span> - {val}
								</option>
							);
						})}
					</select>
					<p>{toCount.toString()}</p>
				</label>
			</div>
			<button onClick={handleClickInvert}>Invert currency's</button>
			<button onClick={handleClickGet}>Get Currency</button>
		</form>
	);
}
