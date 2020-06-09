const cartItemNumber = (cart) =>{
    cart.reduce((count, curItem) => {
        return count + curItem.quantity;
      }, 0)
    }

const addProductToCart = (product) => {
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

   const removeProductFromCart = (productId) => {
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