import React from 'react';
import { Container, Row, Col ,ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBFooter,MDBContainer,MDBCol,MDBRow } from 'mdb-react-ui-kit';
import '../Style/Footer.css';

function Footer() {
    return (
      <>
       <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
           
            <ul className='list-unstyled mb-0'>
              <li>
               <img src="/images/TP-logo-mbl.webp"></img>
              </li>
              <li>
               <img src ="/images/insta-icon.webp"></img>
                
              </li>
              <li>
              <img src = "/images/fb-icon.webp"></img>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Who We Are
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Are you a Dealer ?
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Terms of use 
                </a>
              </li>
             
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Contact Us 
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Career
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Shipping & Return Policy 
                </a>
              </li>
             
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
       TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.        </a>
      </div>
    </MDBFooter>
        </>
        
   );
}

export default Footer;


















