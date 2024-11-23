import ReactIcon from './ReactIcon';

export default function Header() {
	return (
		<header>
			<h1 className="flex items-center gap-2 text-center font-bold max-sm:w-40 sm:text-2xl">
				<ReactIcon className="h-14 w-14 text-reactColor" />
				Exchange React
			</h1>
		</header>
	);
}
