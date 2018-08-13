import IAmMerchant from "./IAmMerchant";

export class Book implements IAmMerchant {
    // プロパティはコンストラクタの前に持ってくる。
    get id() : string {
        return this.isbn;
    }
    get name(): string {
        return this.title
    }
    constructor(readonly isbn: string, readonly title: string, readonly url: string, readonly price: number) {
    }

    public hasMerchant() : boolean {
        return true;
    }
}