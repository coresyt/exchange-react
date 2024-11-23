import { memo } from 'react';
import Form from './components/Form';
import Header from './components/Header';

export default function App() {
	const HeaderMemo = memo(Header);
	const FooterMemo = memo(() => (
		<footer>
			Coded by{' '}
			<a href="https://coresyt.vercel.app/" className="text-zinc-600">
				coresyt
			</a>
		</footer>
	));

	return (
		<>
			<div className="flex flex-col items-center justify-center rounded-md bg-zinc-950/50 px-3 py-2 sm:px-5 sm:py-2.5">
				<HeaderMemo />
				<Form />
			</div>
			<FooterMemo />
		</>
	);
}
