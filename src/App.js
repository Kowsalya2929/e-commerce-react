import React, { useState } from 'react'
import './App.css'
import dress11 from './assests/dress11.png'
import dress12 from './assests/dress12.png'
import shoe from './assests/shoe.png'


const productsData =[
  {
    id: 1,
    name: "Women Frog Dress",
    price: 799.99,
    image: dress11
  },
  {
    id: 2,
    name: "Women Midi Dress",
    price: 1299.99,
    image: dress12
  },
  {
    id: 3,
    name: "Gens Shoe",
    price: 1299.99,
    image: shoe
  },
  
]

const App = () => {
  const [cartItems,setCartItems] = useState([]);
  
  const addToCart= (product)=>{
    setCartItems([...cartItems,product])
  }

  const removeItems=(product)=>{
    setCartItems(cartItems.filter((item)=>item.id !== product.id))
  }

  const totalPrice = cartItems.reduce((sum,item)=>sum+item.price,0)
  return (
    <div className='app'>
      
      {/* header */}

      <header className='header'>
        <h1>E-Commerse Website</h1>
        <div className='cart-info'>
        🛒cart : {cartItems.length}items 
        </div>
      </header>

      {/* main */}

      <main className='main'>

        {/* product 1 */}

        <div className='products'>
          {productsData.map((product)=>{
            return(
            <div key={product.id} className='product'>
              <img src={product.image} alt={product.name}/>
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>)
          })}
        </div>

        {/* product 2 */}

        <div className='products'>
          {productsData.map((product)=>{
            return(
            <div key={product.id} className='product'>
              <img src={product.image} alt={product.name}/>
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>)
          })}
        </div>

        {/* product 3 */}

        <div className='products'>
          {productsData.map((product)=>{
            return(
            <div key={product.id} className='product'>
              <img src={product.image} alt={product.name}/>
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>)
          })}
        </div>

        {/* cart */}

        <div className='cart'>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? 
          (<p>Your cart is empty</p> ):
          (<>
          <ul>
            {cartItems.map((item)=>(
              <li key={item.id}>
                {item.name}-${item.price.toFixed(2)}{""}
                <button onClick={()=>removeItems(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total : ${totalPrice.toFixed(2)}</h3>
          </>)}
        </div>

      </main>

      {/* footer */}

      <footer className='footer'>
        <div className='footer-content'>

          <div className='footer-section'>
            <h3>About Us</h3>
            <p>Welcome to our e-commerce website we offer the best products at low price</p>
          </div>

          <div className='footer-section'>
            <h3>Contact Us</h3>
            <p>Email:mk@gmail.com</p>
            <p>1234567890</p>
          </div>
          
          <div className='footer-section'>
            <h3>Follow Us</h3>
            <div className='web'>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  )
}

export default App