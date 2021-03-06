import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/cartContext';
import Drawer from '../index';

const CartItemCard = (prop) => {
    const { item } = prop;

    return (
        <li>
            <div className="cart-li-inner">
                <div className="cart-li-img">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="cart-li-product-quantity">
                        Qty: {item.cartCount}
                    </div>
                </div>
                <div className="cart-li-product-details">
                    <div>
                        <div className="cart-li-product-name">
                            {item.productName}
                        </div>
                        {
                            item.collection &&
                            <div className="cart-li-product-collection">
                                {item.collection} Collection
                            </div>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}


const CartDrawer = (props) => {

    const [open, setOpen] = useState(false)

    const { cart, total, totalQty } = useContext(CartContext)
    
    let cartText = 'Cart' + (totalQty > 0 ? ` (${totalQty})` : '')

    return (
        <React.Fragment>
            <button className='cart-drawer-btn' onClick={() => setOpen(!open)}>{cartText}</button>
            <Drawer
                id={'cart-drawer'}
                open={open}
                onClose={() => setOpen(false)}
                title={cartText}>
                <section className="cart-drawer-section">
                    <div className="cart-drawer-section-inner">
                        {
                            cart.length > 0 ?
                                <React.Fragment>
                                    <ul className='cart-drawer-ul'>
                                        {cart.map(item => <CartItemCard key={item.product} item={item} />)}
                                    </ul>
                                    <div className="cart-drawer-product-total">
                                        total: ${total.toFixed(2)}
                                    </div>
                                </React.Fragment>
                                :
                                <div className='cart-drawer-is-empty'>
                                    There are currently no items in the cart
                                </div>
                        }
                    </div>
                </section>
            </Drawer>
        </React.Fragment>)
}

export default CartDrawer;