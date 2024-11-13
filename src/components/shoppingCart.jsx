import React, { useReducer } from 'react'


const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.item];
        case 'remove':
            return state.filter((item) => item.id !== action.id);
        case 'clear':
            return [];
    
        default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}
export default function ShoppingCart() {
    const [cart, dispatch] = useReducer(cartReducer, [])
    const addItem = (item) => dispatch({ type: 'add', item });
    const removeItem = (id) => dispatch({ type: 'remove', id });
    const clearCart = () => dispatch({ type: 'clear' });
  return (
    <div>
      <h2>shopping cart</h2>
      <ul>
        {cart?.map((item) => (
          <li key={item.key}>
            (item.name){" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={()=> addItem({id: Date.now(), name:'New Item'})}>Add Item</button>
    </div>
  );
}
