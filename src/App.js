import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShopContext from './context/shop-context'
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css'

class App extends Component {
  state = {
    products: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    cartSum: 0,
    addItem: () => {},
    removeItem: () => {},
  }

   addProductToCart = (product) => {
     console.log(product)
    let updateCartSum = this.state.cartSum
    const updatedCart = this.state.cart;

    const updatedItemIndex = updatedCart.findIndex(// check if product exist in cart
      item => item.id === product.id
    );
    if (updatedItemIndex < 0) { 
      updatedCart.push({...product, quantity: 1 });
      
    } else { 
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updateCartSum++
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
      this.setState({cart: updatedCart, cartSum: updateCartSum})
}

 removeProductFromCart = (productId) => {
  const updatedCart = this.state.cart;
  const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({cart: updatedCart})
}

  render() {
    return (
      <ShopContext.Provider value={
        {
         products: this.state.products,
         cart: this.state.cart,
         cartSum: this.state.cartSum,
         addItem: this.addProductToCart,
         removeItem: this.removeProductFromCart
       }
      }>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ProductsPage} exact />
              <Route path="/cart" component={CartPage} exact />
            </Switch>
          </BrowserRouter>
      </ShopContext.Provider>
    );
  }
}

export default App;
