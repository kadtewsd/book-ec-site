import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import BookList from './list/bookListConnector';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import { getBooks } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BookList books={getBooks()}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
