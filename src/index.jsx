import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { Provider } from 'react-redux';
import store from './redux/config/configStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
