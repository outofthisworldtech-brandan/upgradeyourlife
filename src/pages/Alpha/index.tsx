import { useState } from 'preact/hooks';
import { Logo } from '@/components/Logo';
import viteLogo from '@/imgs/vite.svg';
import daisyLogo from '@/imgs/daisy.svg';
import preactLogo from '@/imgs/preact.svg';
import prettierLogo from '@/imgs/prettier.svg';
import tailwindLogo from '@/imgs/tailwind.svg';
import typeScriptLogo from '@/imgs/typescript.svg';
import { getSVG, svgList, getTheme, toggleTheme } from '@/utils/utils-misc';
import { Shapes, Component, LayoutPanelLeft } from 'lucide-preact';

export default function Alpha() {

	const [quote, setQuote] = useState('In the beginning God created the heavens and the earth.');

	const handleSwap = () => {
		toggleTheme();
		setQuote(
			getTheme() === 'light'
				? 'And God said, “Let there be light,” and there was light.'
				: 'and the darkness he called “night.”',
		);
	};

	return (
		<div>
			<h1 class="py-2 text-7xl font-bold">Genesis</h1>
			<p class="m-auto h-12 w-60 py-4 text-xs italic">{quote}</p>
			<label className="swap swap-rotate py-6">
				<input type="checkbox" className="theme-controller" value="synthwave" />
				<div class="swap-off" onClick={handleSwap}>
					{getSVG(svgList.day, 'fill-current w-10 h-10')}
				</div>
				<div class="swap-on" onClick={handleSwap}>
					{getSVG(svgList.night, 'fill-current w-10 h-10')}
				</div>
			</label>
			<div class="flex items-center py-2">
				<Logo name="Vite" logo={viteLogo} url="https://vitejs.dev" plus />
				<Logo name="Daisy" logo={daisyLogo} url="https://daisyui.com/" plus />
				<Logo name="Preact" logo={preactLogo} url="https://preactjs.com" plus />
				<Logo name="Prettier" logo={prettierLogo} url="https://prettier.io/" plus />
				<Logo name="Tailwind" logo={tailwindLogo} url="https://tailwindcss.com/" plus />
				<Logo name="TypeScript" logo={typeScriptLogo} url="https://preactjs.com/guide/v10/typescript/" />
			</div>
			<div class="flex w-full items-center justify-evenly py-10">
				<a href="https://lucide.dev/icons/" target="_blank">
					<Shapes />
				</a>
				<a href="https://tailwindui.com/components/preview" target="_blank">
					<Component />
				</a>
				<a href="https://heropatterns.com/" target="_blank">
					<LayoutPanelLeft />
				</a>
			</div>
		</div>
	);
}
