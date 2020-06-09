import React, { Component } from 'react';
import MainNavigation from '../components/MainNavigation/MainNavigation';

class CartPage extends Component {

  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber/>
        <main className="cart">
          {/* {cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button>
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul> */}
        </main>

      </React.Fragment>
    );
  }
}
export default CartPage;