import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/app.css';

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
