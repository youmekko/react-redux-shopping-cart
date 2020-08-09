export interface Product {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
    availableCoupon: boolean;
    carted: boolean;
    quantity: number;
    selected: boolean;
}

export interface Coupon {
    type: string;
    title: string;
    discountRate: number;
    discountAmount: number;
}