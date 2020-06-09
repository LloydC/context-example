import React, { Component } from 'react';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import ShopContext from '../context/shop-context'

class ProductsPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (<React.Fragment>
            <MainNavigation cartItemNumber />
              <main className="products">
                <ul>
                  {context.products.map(product => (
                    <li key={product.id}>
                      <div>
                        <strong>{product.title}</strong> - ${product.price}
                      </div>
                      <div>
                        <button>
                          Add to Cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </main>
        </React.Fragment>)}
      </ShopContext.Consumer>
    );
  }
}

export default ProductsPage;