import React from "react";
import Navbar from "./Navbar";
import BussInfo from "./components/BussInfo";
import ReviewsList from "./components/ReviewsList";


import TyreSold from "./components/TyreSold";
import ImageGrid from "./components/ImageGrid";
import PaymentMode from "./components/PaymentMode";
import './Style/styles.css';
import Question from "./components/Question";
import Footer from "./components/Footer";


function App() {
  return (

<div>
  <Navbar/>
  <BussInfo/>
  <ReviewsList/>
  
  
  <TyreSold/>
  <ImageGrid/>
  <PaymentMode/>
  <Question/>
<Footer/>  
</div>   
  );
}

export default App;
