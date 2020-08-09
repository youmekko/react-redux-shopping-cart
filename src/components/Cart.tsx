import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Product } from '../types/types'
import { changeSelected, changeSelectedAll, changeQuantity} from '../redux/actions' 
import PriceTable from './PriceTable'

function Cart({ itemList, selectedAll }) {
    const dispatch = useDispatch()

    const onChangeSelected = (event) => {
        const id = event.target.value
        const selected = event.target.checked
        dispatch(changeSelected(id, selected))
    }

    const onChangeSelectedAll = (event) => {
        const selected = event.target.checked
        dispatch(changeSelectedAll(selected))
    }

    const onChangeQuantity = (event) => {
        const id = event.target.name
        const quantity = event.target.value

        if (quantity > 0 && quantity <= 10) {
            dispatch(changeQuantity(id, quantity))
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">
                            <input type="checkbox" 
                                checked={selectedAll}
                                onChange={onChangeSelectedAll}
                            />
                        </th>
                        <th scope="col">클래스명</th>
                        <th scope="col">수량</th>
                        <th scope="col">가격</th>
                        <th scope="col">쿠폰 적용</th>
                    </tr>
                </thead>
                
                 {itemList.length ? 
                    (<tbody>
                        {itemList.map((item:Product, idx) => {
                            return (
                            <tr key={idx}>
                                <td scope="row">
                                    <input type="checkbox"
                                        value={item.id}
                                        checked={item.selected}
                                        onChange={onChangeSelected}
                                    />
                                </td>
                                {/* <td><img src={item.coverImage} style={{ width: '200px' }}/></td> */}
                                <td>{item.title}</td>
                                <td>
                                    <input type="number" 
                                        name={item.id}
                                        value={item.quantity}
                                        onChange={onChangeQuantity}>
                                    </input>
                                </td>
                                <td>{item.price.toLocaleString()}</td>
                                <td>{item.availableCoupon === undefined ? '가능' : '불가'}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                    )
                    : 
                    (<tbody>
                        <tr>
                            <td colSpan={5}>장바구니에 담긴 상품이 없습니다.</td>
                        </tr>
                    </tbody>)
                }
               
            </table>
            <PriceTable itemList={itemList} />
        </div>
    )
}

const mapStateToProps = state => {
    const { cart } = state
    const { itemList, selectedAll } = cart
    return { itemList, selectedAll }
}

export default connect(mapStateToProps)(Cart)
