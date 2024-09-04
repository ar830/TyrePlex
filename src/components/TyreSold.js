
import React from "react";
import '../Style/TyreSold.css';
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle
} from 'mdb-react-ui-kit';

const TyreSold = () => {
  return (
    <>
      <div className="tyre-sold-container">
        <div className="row">
          <div className="col-md-6">
        <div className="header">
          <h4>Tyres Sold by Dealers</h4>
        </div>
        </div>
        <div className="col-md-6">
        <div className="filter-section">
          <MDBDropdown>
            <MDBDropdownToggle color='primary'>Filter By</MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Toyota Corolla</MDBDropdownItem>
              <MDBDropdownItem link>Toyota Corolla</MDBDropdownItem>
          
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle color='secondary'>Most Popular</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <a href="#" className="advanced-link">Advanced</a>
        </div>
        <div className="dropdowns-section">
          <MDBDropdown>
            <MDBDropdownToggle color='secondary'>Car</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle color='secondary'>Lamborghini</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle color='secondary'>Avendator</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle color='secondary'>Choose Variant</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TyreSold;
