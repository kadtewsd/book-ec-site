import IAmMerchant from "./IAmMerchant";

/**
 * this is null object pattern...
 */
export default class EmptyMerchant implements IAmMerchant {
    public readonly name: "Empty"
    public readonly price: 0;
    public readonly id: "none";
    public hasMerchant(): boolean {
        return false;
    }
}