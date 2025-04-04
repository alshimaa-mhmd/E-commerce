
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Routes, Route, Navigate } from 'react-router'
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import NotFound from './components/NotFound'
import ProductsHeader from './components/ProductsHeader'
import ProductTemplate from './components/ProductTemplate'
import Home from './components/Home'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart' 
import ProductsContext from './components/ProductsContext'
import { useEffect, useState } from 'react'
import ProductPage from './components/ProductPage'
import Profile from './components/Profile'
import CheckOutPage from './components/CheckOutPage'

function App() {
  const [products, setProducts] = useState ([]);
  const [wishlist , setWishlist] = useState ([]);
  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState(0)
  // const [showAll, setShowAll] = useState(false);
  // const initialCount = 4;
  // const displayedProducts = showAll ? products : products.slice(0, initialCount);


  const addToWishlist = (productId) => {
    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some(item => item.id === productId);
    
    // Only add to wishlist if the product isn't already there
    if (!isProductInWishlist) {
      setWishlist(prevWishlist => {
        return [...prevWishlist, products[productId - 1]];
      });
    }
  };

  const addToCart = (productId) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some(item => item.id === productId);
    
    if (isProductInCart) {
      // Product already exists in cart, no need to add it again
      // We'll handle quantity elsewhere
      return;
    } else {
      // Product is not in cart, add it
      setCart(prevCart => {
        return [...prevCart, products[productId - 1]];
      });
    }
  };

  const MoveAllToBag = () => {
    if (wishlist.length == 0 ) return;
    setCart( () => {
      return [...cart , ...wishlist]
    });
    setWishlist([])
  }
  
  const updateCart = () =>{
    setCart([]);
  }
 
  const removeFromCart = (productId) => {
    // Filter out the product with the matching ID
    setCart(prevCart => {
      return prevCart.filter(item => item.id !== productId);
    });
  };
  const removeFromWishlist = (productId) => {
    // Filter out the product with the matching ID
    setWishlist(prevWishlist => {
      return prevWishlist.filter(item => item.id !== productId);
    });
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }

  useEffect( ()=> {

      fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))

  }, [])

  console.log(products[1])
  return (
    <>

  <ProductsContext.Provider value={{
              products,
              wishlist,
              addToWishlist,
              cart,
              addToCart,
              MoveAllToBag,
              updateCart,
              quantity,
              handleQuantity,
              removeFromCart,
              removeFromWishlist,
            }}>

        <Nav />
        <main className='overflow-x-hidden '>
        
          <Routes>
            <Route path="/" element={ <Home  />}/>
            <Route path="contact" element={ <Contact />}/>
            <Route path="about" element={ <About />}/>
            <Route path='wishlist' element={ <Wishlist /> }/>
            <Route path='cart' element={ <Cart /> }/>
            <Route path='profile' element={ <Profile /> }/>
            <Route path='checkout' element={ <CheckOutPage /> }/>
            <Route path=':productId' element={ <ProductPage /> }/>
            <Route path='wishlist/:productId' element={ <ProductPage /> }/>
            <Route path=':productId/:productId' element={ <ProductPage /> }/>
            <Route path="sign up" element={ <SignUp />}/>
            <Route path="login" element={ <LogIn />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="not-found" element={<NotFound />}/>
          </Routes>
          </main>
        </ProductsContext.Provider>
        
        <Footer />



    </>
  )
}

export default App
