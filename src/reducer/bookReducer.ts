import {getBooks} from '../store/store';
import { IBookAction } from './BookActionDispatcher'

export enum BookReducerType {
    INITIAL,
    ADD
}

const initialState: IBookAction = { isbn: "", books: [], type: BookReducerType.INITIAL};
const bookReducer = (state: IBookAction = initialState, action: IBookAction) => {
    switch (action.type) {
        case BookReducerType.ADD:
        const book = getBooks().filter(x => x.isbn === state.isbn)
            return {... state, books: [...state.books, book]}
        default:
            return state;
    }

}
export default bookReducer;