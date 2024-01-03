import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images.pexels.com/photos/10387794/pexels-photo-10387794.jpeg',
      name: 'Jeep',
      category: 'Car Toy',
      seller: 'AMZ Seller Ghz',
      price: 199
    },
    {
      url: 'https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg',
      name: 'ferrari',
      category: 'Car Toy',
      seller: 'Watch Ltd Siyana',
      price: 2399
    },
    {
      url: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Teddy',
      category: 'bear Toy',
      seller: 'TDY',
      price: 5000
    },
    {
      url: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Yellow Smile',
      category: 'Soft Toy',
      seller: 'Camron ',
      price: 400
    },
    {
      url: 'https://images.pexels.com/photos/592677/pexels-photo-592677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Duck',
      category: 'Doll Toy',
      seller: 'Watchers',
      price: 200
    },
    {
      url: 'https://images.pexels.com/photos/565999/pexels-photo-565999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Water toy',
      category: 'Swiming Toy',
      seller: 'ABS private',
      price: 1999
    },
    {
      url: 'https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Six face',
      category: 'Dice Toy',
      seller: 'White LM',
      price: 699
    },
    {
      url: 'https://images.pexels.com/photos/448539/pexels-photo-448539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Spinner',
      category: 'Toy',
      seller: 'ABS private',
      price: 899
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginForm/>}></Route>
      </Routes>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
<footer className='f'>
<h3>Address:</h3>
<a>Address: Unit No S14, 2nd Flr, Brookefields Mall, 67/71, Dr Krishnasamy Mudaliyar Rd, Brookefields, Sukrawar Pettai, R.S. Puram, Coimbatore, Tamil Nadu 641001</a>
<div>
  <h3>Follow us in:</h3>
<FaInstagram  className='insta'/>
<FaFacebook  className='insta'/>
<FaXTwitter  className='insta'/>
</div>
</footer>
    </div>
  );
}

export default App;