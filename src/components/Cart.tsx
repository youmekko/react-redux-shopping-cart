import React from 'react'
import { connect } from 'react-redux'
import { Product } from '../types/types'

function Cart({ itemList }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th colSpan={2}>클래스명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>쿠폰 적용</th>
                    </tr>
                </thead>
                
                 {itemList.length ? 
                    (<tbody>
                        {itemList.map((item:Product, idx) => {
                            return (
                            <tr key={idx}>
                                <td><input type="checkbox" /></td>
                                <td><img src={item.coverImage} style={{ width: '200px' }}/></td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.availableCoupon === undefined ? '가능' : '불가'}</td>
                            </tr>
                            )
                        })}
                         </tbody>
                    )
                    : 
                    (<tbody>
                        <tr>
                            <td colSpan={6}>장바구니에 담긴 상품이 없습니다.</td>
                        </tr>
                    </tbody>)
                }
               
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    const { cart } = state
    const { itemList } = cart
    return { itemList }
}

export default connect(mapStateToProps)(Cart)
