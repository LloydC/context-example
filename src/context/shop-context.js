import React from 'react';

const shopContext = React.createContext({
    products: [],
      cart: [],
      cartSum: 0,
      addItem: () => {},
      removeItem: () => {}
})

export default shopContext;