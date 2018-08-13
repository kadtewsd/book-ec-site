interface IAmMerchant {
    price: number,
    name: string,
    id: string,
    hasMerchant(): boolean
}
export default IAmMerchant;