import { createContext, useState } from 'react';
import { MenuItem } from '../../model/Menu';

type CartItem = {
  item: MenuItem;
  quantity: number;
};

export interface CartContextProps {
  cartItems: CartItem[];
  addItemToCart: (newItem: MenuItem) => void;
};
const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addItemToCart: () => { }
});

export const CartContextProvider = (props: any) => {
  const [cartItems, setCardItems] = useState<CartItem[]>([]);

  const addItemToCart = (newItem: MenuItem) => {
    const newListItems = [...cartItems];
    const foundItemIndex = newListItems.findIndex(
      (cartItem) => cartItem.item._id === newItem._id
    );
    if (foundItemIndex !== -1) {
      const foundItem = { ...newListItems[foundItemIndex] };
      foundItem.quantity++;
      newListItems.splice(foundItemIndex, 1, foundItem);
      setCardItems(newListItems);
    } else {
      const addedItem: CartItem = {
        item: newItem,
        quantity: 1
      };
      setCardItems([...newListItems, addedItem]);
    }
  };

  const context = {
    cartItems: cartItems,
    addItemToCart: addItemToCart
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
