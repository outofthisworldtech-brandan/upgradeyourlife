import App from '@/app';
import '@/assets/css/app.css';
import { render } from 'preact';

render(<App />, document.getElementById('app') as any);
