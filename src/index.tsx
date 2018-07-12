import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import './index.css';
import BookList from './list/bookListConnector';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

/**
 * router を定義します。
 * exact=true にしないと /bookList の "/" が部分一致するので、
 * /bookList でも App が開いてしまいます。
 */
const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={App} />
    <Route path="/bookList" component={BookList} />
  </Switch>
)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
