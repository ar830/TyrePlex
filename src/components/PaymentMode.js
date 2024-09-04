import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/PaymentMode.css';


const CheckSign =()=>(
  <span className='check-sign'>✓</span>
)


const PaymentMode = () => {
  return (
    <div className="container">
      <div className="row">
      <h3>Payment Mode</h3>
        <div className="col-md-6">
      
          <div className='payment-option'> 
            <CheckSign />
            
            Deposit to Account</div>
          <div className="payment-option">
          <CheckSign />

            Credit Card/Debit Card</div>
          <div className="payment-option">
          <CheckSign />

            Net Banking</div>
        </div>

       
        <div className="col-md-6">
        
          <div className="payment-option">
          <CheckSign />

            UPI</div>
          <div className="payment-option">
          <CheckSign />

            Wallets (PayTM/PhonePe/Amazon etc.)</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMode;
