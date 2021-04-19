import React, { useContext } from 'react';
import ShopContext from '../context/shop-context'
import MainNavigation from '../components/MainNavigation/MainNavigation';

const CartPage = (props) => {

  const shop = useContext(ShopContext);

    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={
                      shop.cart.reduce((count, curItem) => {
                          return count + curItem.quantity;
                        }, 0)
                      }/>
        <main className="cart">
          {shop.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {shop.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button onClick={() => shop.removeItem(cartItem.id)}>
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>

      </React.Fragment>
    );
  }
export default CartPage;