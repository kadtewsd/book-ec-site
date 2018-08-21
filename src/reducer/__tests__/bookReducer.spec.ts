import { Book } from '../../domain/Book';
import CartDetail from '../../domain/CartDetail';
import { addingAction, changingAction, ICartState } from '../BookActionDispatcher'
import reducer from '../bookReducer'

describe('reducer/bookReducer', () => {
  it('Changing Action', () => {
    const state: ICartState = { cart: cartDetails() }
    const result = reducer(state, changingAction("2", 20))
    expect(result.cart.length).toBe(2);

    let checked = false;
    for (const cart of result.cart) {
      const quantity = cart.book.id === "2" ? 20 : 1;
      expect(cart.itemQuantity).toBe(quantity)
      check(cart.book as Book);
      checked = true;
    }
    expect(checked).toBe(true);

  })

  it('Adding Action', () => {
    const state: ICartState = { cart: cartDetails() }
    const result = reducer(state, addingAction("B07DLYYM3F"))
    expect(result.cart.length).toBe(3)

    for (const cart of result.cart) {
      expect(cart.itemQuantity).toBe(1);
      if (cart.book.id === "1" || cart.book.id === "2") {
        check(cart.book as Book);
      } else {
          expect(cart.book.id).toBe("B07DLYYM3F");
          expect(cart.book.name).toBe("冴えない彼女の育て方");
          expect((cart.book as Book).url).toBe("https://images-fe.ssl-images-amazon.com/images/I/51kyGzZXx4L._BG0,0,0,0_FMpng_.jpg");
          expect(cart.book.price).toBe(617)
      }
    }
  });
})
function check(target: Book) {
  const source = cartDetails().filter((x) => x.book.id === target.isbn)[0].book as Book
  expect(target.name).toBe(source.name);
  expect(target.url).toBe(source.url);
  expect(target.price).toBe(source.price);
}

function cartDetails(): CartDetail[] {

  const hinamatsuri = "https://images-fe.ssl-images-amazon.com/images/I/61ipnglpV2L._BG0,0,0,0_FMpng_SR240,320_.jpg";
  const blackJack = "https://images-fe.ssl-images-amazon.com/images/I/5127tJl1p0L._BG0,0,0,0_FMpng_SR240,320_.jpg";
  const list = [
    new CartDetail(
      new Book("1", "我輩は猫である", blackJack, 900),
      1),
    new CartDetail(
      new Book("2", "失われた時を求めて", hinamatsuri, 1900),
      1),
  ]
  return list;
}