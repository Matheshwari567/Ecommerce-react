import React from 'react';
import { useCart } from '../context/Cartcontext';
import '../cart/cart.css';
// import { useNavigate } from 'react-router-dom';
function Cart() {
  // const navigate=useNavigate();
  const { cartItems, removeFromCart, clearCart, getTotalPrice, decreaseQuantity, increaseQuantity,
  } = useCart();
  
  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (

    <div className='cart-div' style={{ padding: '20px' }}>
      <h2 className='cart-h2'>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className='cart-main' key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
              <div> <img className='cart-img' src={item.image} alt='img' /></div>
              <div>   <h4 className='cart-h4'>{item.name}</h4>
                <p className='cart-p'>Quantity:{item.quantity}</p>
                <button  className="incre-btn" onClick={() => decreaseQuantity(item.id)}>−</button>
                {item.quantity}
                <button className="incre-btn" onClick={() => increaseQuantity(item.id)}>+</button>


                <p>Price: ${item.price} x {item.quantity} = <strong>${ + item.price * item.quantity}</strong></p>
                <button className='cart-btn' onClick={() => removeFromCart(item.id)} >Remove</button>
              </div>
            </div>
          ))}

          <h3 className='cart-h3'>Total: ${getTotalPrice()}</h3>
          <button className='cart-btn1' onClick={handleCheckout} >
            Checkout
          </button>


          <div>
          

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
