import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<SVGElement>;

export default function ReactIcon({ className, ...props }: Props) {
	const twMClassName = twMerge(
		'me-0 flex h-10 w-10 origin-center text-sm transition-all ease-in-out',
		className
	);

	return (
		<svg
			{...props}
			width="100%"
			height="100%"
			viewBox="-10.5 -9.45 21 18.9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={twMClassName}
		>
			<circle cx="0" cy="0" r="2" fill="currentColor"></circle>
			<g stroke="currentColor" stroke-width="1" fill="none">
				<ellipse rx="10" ry="4.5"></ellipse>
				<ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
				<ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
			</g>
		</svg>
	);
}
