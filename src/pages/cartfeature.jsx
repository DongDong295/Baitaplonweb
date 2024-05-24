import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cartFeature.css'; // Import CSS file
import { setQuantity, removeFromCart } from './cartSlice.jsx'
import { Button } from 'react-bootstrap';

const CartFeature = () => {
  const cart = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  // Tính tổng tiền của giỏ hàng
  const totalAmount = cart.reduce((total, item) => total + (item.product.list_price * item.quantity), 0);

  // Hàm xử lý khi thay đổi số lượng sản phẩm
  const handleQuantityChange = (id, quantity) => {
    dispatch(setQuantity({ id, quantity }));
  };

  // Hàm xử lý khi xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='mx-5'>
      <h2 className='my-5'>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <h1>Giỏ hàng của bạn trống</h1>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.product.images[0].small_url} alt={item.product.name} />
                <div className="product-info">
                  <h4>{item.product.name}</h4>
                  <div>Giá: {item.product.list_price}₫</div>
                  <div className='d-flex box'>
                      <div className="quantity-label">Số lượng:</div>
                      <button className='button-adj' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                      <div className='quantity-box'>{item.quantity}</div>
                      <button className='button-adj' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div>Thành tiền: {item.product.list_price * item.quantity}₫</div>
                  <Button  variant="outline-danger" onClick={() => handleRemoveFromCart(item.id)}>Xóa sản phẩm</Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-amount">Tổng tiền: {totalAmount}₫</div>
        </div>
      )}
    </div>
  );
}; 

export default CartFeature;
