import '../src/styles/style.scss'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails';
import ProductGallery from './components/Gallery/ProductGallery';
import { createContext, useReducer} from 'react';
import ManageCart from './components/ManageCart';

let cartItem = {}

export const Context = createContext(cartItem)

function App() {
  const [state, dispatch] = useReducer(ManageCart, cartItem)
  
  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  } 

  const deleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM'
    })
  } 

  return (
      <Context.Provider value={{state, addItem, deleteItem}}>
        <Navbar />
        <main>
          <ProductGallery />
          <ProductDetails />
        </main>
      </Context.Provider>
  );
}

export default App;
