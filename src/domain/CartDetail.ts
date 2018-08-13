import IAmMerchant from "./IAmMerchant";

export default class CartDetail {
    get itemQuantity(): number {
        return this.quantity;
    }
    constructor(readonly book: IAmMerchant, private quantity: number) {}
    public newQuantity(argQuantity: number) {
        this.quantity = argQuantity;
    }
}