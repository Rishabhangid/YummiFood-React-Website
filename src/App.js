// imported css  
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Offers from './Components/Offers';
import SignIn from './Components/SignIn';
import Meals from './Components/Meals';
import { useState } from 'react';

function App() {

  // usestate to control the add to cart functionally 
  const [count,setCount] = useState(0);

  // responsible for adding in cart 
  const handleadd =() => {
    setCount(count+1);
  }

  return (
    <div className="app">

      <BrowserRouter>

        {/* passing props for updating cart  */}
        <Header count={count} className=" z-10 "></Header>
        {/* <Home></Home> */}
        <Routes>

          {/* passing function as prop to add it on add to cart button  */}
          <Route path="/" element={<Home handleadd= { handleadd }/>}></Route>
          <Route path="/aboutus" element={ <AboutUs/> }></Route>
          {/* passing function as prop to add it on add to cart button  */}
          <Route path="/Meals" element={ <Meals handleadd= { handleadd }/> }></Route>
          <Route path="/signin" element={ <SignIn/> }></Route>



        </Routes>
        <Footer></Footer>
 
      </BrowserRouter>


    </div>
  );
}

export default App;
