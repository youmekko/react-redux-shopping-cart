import React, { useState, useEffect } from 'react'
import { Product, Coupon } from '../types/types'
import Coupons from './Coupons'

function PriceTable ({ itemList }) {
    const [couponType, setCouponType] = useState('rate')
    const [couponValue, setCouponValue] = useState(0)
    const [selectedCoupon, setSelectedCoupon] = useState('noCoupon')
   
    const getSelectedItems = () => {
        return itemList.filter((item:Product) => item.selected === true)
    }

    const getTotalPrice = () => {
        const selectedItems = getSelectedItems()
        const total = selectedItems.reduce((price, item) => {
            return price += (item.price * item.quantity)
        }, 0) 
        return total     
    }

    const getDiscountAmount = () => {
        const selectedItems = getSelectedItems()
        const availableCouponPrice = selectedItems
                .filter((item:Product) => item.availableCoupon === undefined)
                .reduce((price, item) => {
                    return price += (item.price * item.quantity)
                }, 0)

        switch (couponType) {
            case 'rate' :
                return availableCouponPrice * (couponValue / 100)
            case 'amount' :
                return availableCouponPrice > couponValue ? couponValue : 0
            default:
                return 0
        }        
    }

    const getFinalPrice = () => {
        const totalPrice = getTotalPrice()
        const discountAmount = getDiscountAmount()
        const finalPrice = Math.floor(totalPrice - discountAmount)
        return finalPrice
    }

    const onChangeCoupon = (event) => {
        const couponId = event.target.id
        setSelectedCoupon(couponId)

        const coupon = event.target.value.split(':')
        setCouponType(coupon[0])
        setCouponValue(coupon[1])
    }

    return (
        <div style={{marginTop: '30px'}}>
            <Coupons onChangeCoupon={onChangeCoupon} selectedCoupon={selectedCoupon} />
            <table>
                <tbody>
                    <tr>
                        <td>상품 금액</td>
                        <td>{getTotalPrice()}</td>
                        <td>상품 할인 금액</td>
                        <td>{getDiscountAmount()}</td>
                    </tr>
                    <tr>
                        <td>결제 금액</td>
                        <td colSpan={3}>{getFinalPrice()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PriceTable
