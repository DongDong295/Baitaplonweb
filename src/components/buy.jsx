
import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import '../components/buy.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../pages/cartSlice';
import { useSelector } from 'react-redux';

const Buy = ({ product }) => {
    const inCart = useSelector(state => state.cart.cartItem)
    const dispatch = useDispatch()
    const HandleAddToCart = () =>{

        const action = addToCart({
            id: product.id, 
            product,
            quantity: quantity,
        });
        console.log(quantity);
        console.log(action);
        dispatch(action)
    };

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const tinhGiaTien = product ? product.list_price * quantity : 0;
    
    

    return (
        <div className='buy-container'>
            <div className='cate'>Số lượng</div>
            <div className="quantity-selector">
                <Button className='button' onClick={decreaseQuantity} variant="outline-secondary">-</Button>
                <div className="quantity-box my-2">{quantity}</div>
                <Button className='button' onClick={increaseQuantity} variant="outline-secondary">+</Button>
            </div>
            <div className='cate'>Tạm tính: {tinhGiaTien}₫</div>
            <div className="d-grid gap-2">
                <Button variant="danger" size="lg">
                    Mua ngay
                </Button>
                <Button className='cart' variant="secondary" size="lg" onClick={HandleAddToCart}>
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
};

export default Buy;