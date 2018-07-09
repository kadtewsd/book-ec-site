import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import BookList from './list/BookList';
import registerServiceWorker from './registerServiceWorker';
import {getBooks} from './store/store';

ReactDOM.render(
  <BookList books={getBooks()} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
