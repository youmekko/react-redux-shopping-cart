import React, { useState, useEffect } from 'react'
import { Coupon } from '../types/types'

function Coupons ({ onChangeCoupon, selectedCoupon }) {
    const [coupons, setCoupons] = useState([])
    
    
    useEffect(() => {
        const coupons = fetch('http://localhost:3001/data/coupons.json')
            .then(res => res.json())
            .then(res => setCoupons(res.data)) 
    }, [])
    
    return (<div>
            <label>
                <input type="radio" 
                    name="coupon" 
                    id="noCoupon" 
                    value="noCoupon:0" 
                    checked={selectedCoupon==='noCoupon'} 
                    onChange={onChangeCoupon} 
                />
                쿠폰미적용
            </label>
            {coupons.map((coupon:Coupon, idx) => {
                return (<label key={idx}>
                            <input type="radio" 
                                name="coupon"
                                id={coupon.title}
                                value={coupon.type === 'rate' ? `rate:${coupon.discountRate}` : `amount:${coupon.discountAmount}`} 
                                onChange={onChangeCoupon} 
                            />
                            {coupon.title}
                        </label>
                    )
            })}
    </div>)
}

export default Coupons