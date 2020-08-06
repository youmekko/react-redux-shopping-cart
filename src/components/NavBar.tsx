import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function NavBar({ quantity }) {
    return (
        <div className="navBar">
            <div>
                <Link to="/"><h1>CLASS101</h1></Link>
            </div>
            <div>
                <Link to="/cart">장바구니 [{quantity}]</Link>
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


