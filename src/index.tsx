import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  // BrowserRouter, 
  Route,
  Router,
  Switch
} from 'react-router-dom'
// import { Route } from "react-router";
import App from './App';
import CartList from './cart/cartListConnector';
import './index.css';
import BookList from './list/bookListConnector';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store/store';

/**
 * router を定義します。
 * exact=true にしないと /bookList の "/" が部分一致するので、
 * /bookList でも App が開いてしまいます。
 */
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route path="/bookList" component={BookList} />
      <Route path="/cartList" component={CartList} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
