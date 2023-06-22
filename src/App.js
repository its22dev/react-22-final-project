import { useReducer } from 'react';
import './assets/all.scss';
import Container from './compenents/Container';
import Navbar from './compenents/Navbar';
import { CartContext } from "./Store";

function App() {
  const CartReducer = useReducer((state, action) => {
    console.log(action)
    const CartList = [...state.CartList]
    const index = CartList.findIndex((item) => item.id === action.payload.id)

    switch (action.type) {
      case 'ADD_TO_CART':
        if (index === -1) {
          CartList.push(action.payload)
        } else {
          CartList[index]['qty'] += action.payload.qty
        }
        return { ...state, CartList, TotalPrice: calTotal(CartList) }
      case 'UPDATE_QTY':
        CartList[index]['qty'] = action.payload.qty
        return { ...state, CartList, TotalPrice: calTotal(CartList) }
      case 'DEL_ITEM':
        CartList.splice(action.payload.dataIndex, 1)
        return { ...state, CartList, TotalPrice: calTotal(CartList) }
      case 'CLEAR_CART':
        CartList.splice(0, CartList.length);
        return { CartList, TotalPrice: 0 }
      default:
        return state
    }
  },
    {
      CartList: [],
      TotalPrice: 0,
    }
  )

  return (
    <div className="App">
      <CartContext.Provider value={CartReducer}>
        <Navbar />
        <Container />
      </CartContext.Provider>
    </div>
  );
}

function calTotal(CartList) {
  return CartList
    .map((item) => item.price * item.qty)
    .reduce((a, b) => a + b, 0)
}

export default App;
