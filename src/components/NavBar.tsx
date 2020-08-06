import React from 'react'
import { connect } from 'react-redux'

function NavBar({ quantity }) {
    return (
        <div>
            <div>
                <h1>CLASS101</h1>
            </div>
            <div>
                장바구니[{quantity}]
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    const { cart } = state
    const quantity = cart.itemList.length
    return { quantity }
}

export default connect(mapStateToProps)(NavBar)


