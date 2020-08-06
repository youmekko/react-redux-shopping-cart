export interface Product {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
    availableCoupon: boolean;
    carted: boolean;
    quantity: number;
}