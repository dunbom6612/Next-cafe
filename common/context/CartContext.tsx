import { createContext, useState } from 'react';
import { MenuItem } from '../../model/Menu';

type CartItem = {
  item: MenuItem;
  quantity: number;
};

export interface CartContextProps {
  cartItems: CartItem[];
  addItemToCart: (newItem: MenuItem) => void;
  resetCartItem: () => void

};
const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addItemToCart: () => { },
  resetCartItem: () => { }
});

export const CartContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (newItem: MenuItem) => {
    const newListItems = [...cartItems];
    const foundItemIndex = newListItems.findIndex(
      (cartItem) => cartItem.item._id === newItem._id
    );
    if (foundItemIndex !== -1) {
      const foundItem = { ...newListItems[foundItemIndex] };
      foundItem.quantity++;
      newListItems.splice(foundItemIndex, 1, foundItem);
      setCartItems(newListItems);
    } else {
      const addedItem: CartItem = {
        item: newItem,
        quantity: 1
      };
      setCartItems([...newListItems, addedItem]);
    }
  };

  const resetCartItem = () => {
    setCartItems([]);
  }

  const context = {
    cartItems,
    addItemToCart,
    resetCartItem
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
