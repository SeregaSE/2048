import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Root from './components/Root';
import configureStore from './store/configureStore';
import theme from './theme';
import './assets/fonts/ClearSans-Bold.woff';
import './assets/fonts/ClearSans-Regular.woff';
import './theme/fonts.css';

const root = document.getElementById('root');
const store = configureStore();

// eslint-disable-next-line
const render = (Component, store) => ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    </Provider>,
    root,
);

render(Root, store);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./components/Root', async () => {
            const Next = await import('./components/Root');
            render(Next.default, store);
        });
    }
}
