export default interface sellModelInterface {
    name: string,
    phone: string,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    selltype: ESellType,
    locationType: ELocationType

}
 export  enum ESellType {
    REQUEST = "request",
    BID = "bid"
}

 export enum ELocationType {
    PRIVATE = "private",
    COMMERCIAL = "commercial"
}