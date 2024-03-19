import Alpha from '@/pages/Alpha';
import { Router, Route } from 'preact-router';

export default function App() {
	return (
		<Router>
			<Route path="/" component={Alpha}></Route>
		</Router>
	);
}
