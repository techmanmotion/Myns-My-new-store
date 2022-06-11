import React,{useState , createContext} from 'react';

import './App.css';



import Header from './components/Header';
import Footer from './components/Footer';
import MyRouter from './MyRouter';

function App() {

  const productContext = createContext();

  const[cartItems , setCartItems] = useState([]);
  const[wishlist , setWishlist] = useState([]);

  const[cartqty , setCartqty] = useState(0);
    const[wishlistqty , setWishlistqty] = useState(0);


  function doesExist(item){
    return cartItems.includes(item);
  }


  function addtocart(item){
    let tempobj = item;
    tempobj.cartqty = 1;
    if(! doesExist(item)){
      setCartItems([...cartItems, tempobj]);
      setCartqty(cartItems.length+1);
    }
  }

  function addtowishlist(item){
    let tempobj = item;
    tempobj.wishlist = true;

    setWishlist([...wishlist, tempobj]);
    setWishlistqty(wishlist.length+1);
    
  }

  function deleteitem(item){
    item.cartqty = 0;
    let remainingItems = cartItems.filter((allitem)=>{
        return (item.id !== allitem.id); 
    })
    setCartItems(remainingItems);
    setCartqty(cartqty-1);
  }

  function removewishlist(item){
    item.wishlist = false;
    let remainingItems = wishlist.filter((curitem)=>{
        return (item.id !== curitem.id); 
    })
    setWishlist(remainingItems);
    setWishlistqty(wishlistqty-1);
  }

  return (
    <div className="app">

        <Header cartqty={cartqty} wishlistqty={wishlistqty}/>

      {/* <productContext.provider >
      </productContext.provider> */}

        <MyRouter cartqty={cartqty} cartItems={cartItems} addtocart={addtocart} deleteitem={deleteitem} wishlist={wishlist} addtowishlist={addtowishlist}  removewishlist={removewishlist}/>
      
      
      <Footer/>


    </div>
  );
}

export default App;
