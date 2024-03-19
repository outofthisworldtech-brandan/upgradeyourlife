export const Logo = (props: any) => (
	<>
		<div>
			<a href={props.url} target="_blank">
				<img src={props.logo} class="logo" alt={props.name + 'Logo'} />
			</a>
			<span class="text-sm font-extralight">{props.name}</span>
		</div>
		{props.plus && <span class="text-2xl font-extralight">+</span>}
	</>
);
