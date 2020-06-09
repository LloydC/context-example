import React, { Component } from 'react';
import MainNavigation from '../components/MainNavigation/MainNavigation';

class ProductsPage extends Component {
  render() {
    return (
          <React.Fragment>
            <MainNavigation cartItemNumber />
              <main className="products">
                <ul>
                  {/* {products.map(product => (
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
                  ))} */}
                </ul>
              </main>
      </React.Fragment>
    );
  }
}

export default ProductsPage;