import categoryModelInterface from "./categoryCategory";

export default interface sellModelInterface {
    name: string,
    phone: string,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: string,
    selltype: ESellType,
    locationType: ELocationType,
    _id?: string


}
export interface sellModelInterfacePopulate {
    name: string,
    phone: string,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: categoryModelInterface,
    selltype: ESellType,
    locationType: ELocationType,
    _id?: string


}
export enum ESellType {
    REQUEST = "request",
    BID = "bid"
}

export enum ELocationType {
    PRIVATE = "private",
    COMMERCIAL = "commercial"
}