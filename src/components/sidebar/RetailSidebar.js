import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../constants/GetDimention'

import './sidebar.css'

const RetailerSidebar = () => {
  const [drawer, setDrawer] = useState(false)
  const [isOpenAmb, setIsOpenAmb] = useState(false);
  const { height, width } = useWindowDimensions();
  const dimension = width <= 768
  useEffect(() => {
    (dimension ? setDrawer(true) : setDrawer(false))

  }, [dimension])

  const toggleAmbulance = async () => {
    setIsOpenAmb(!isOpenAmb);
  
  };

  useEffect(() => {
    localStorage.setItem("drawer", drawer)
  }, [drawer])

  useEffect(() => {
    const side = localStorage.getItem("drawer")
    console.log(side)
  }, [drawer])

  return (
    <>{
      !drawer ? <>
        <div className="sidebar-container">
          <div className='logo-dashboard'>
            <img src='https://project.bdxpo.com/kolanstores/homepage/images/logo.png' alt='logo' />
            <button onClick={(e) => setDrawer(!drawer)}>
              <span className='close-sidebar'>
                <i class="fas fa-angle-left" ></i>
              </span>
            </button>

          </div>
          {/* ---------------------------------------------------------------------------------------------------------- */}
          <nav className='nav-open'>
            <ul className='nav-open-menu'>
              <li className='sum-menu'>
                <div class="accordion" id="accordionExample">

                  {/* ------------------------------Dashboard------------------------------------------------------ */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button">
                        <NavLink to={"/retailer"}>Retailer </NavLink>

                      </button>
                    </h2>

                  </div>


                  {/* ---------------------------Ambulance-------------------------------------------------------- */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Retailer Management
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/retailer/retailerOrder/histroty"}>Order History</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/retailer/retailerOrder/purchase"}>Retailer Purchase</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* ---------------------------------------------------------------------------------- */}
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* -------------------------------------side menu is closed------------------------------- */}


      </> :
        <div className='sidebar'>
          <div className='logo-dashboard-close'>
            <button onClick={(e) => setDrawer(!drawer)}>
              <span className='open-sidebar'>
                <i className="fas fa-angle-right" ></i>
              </span>
            </button>
            <img src='https://project.bdxpo.com/kolanstores/homepage/images/logo.png' alt='logo' />

          </div>


          <div className="collapsible-menu dashboard-menu">
            <span className='side-navb'>
              <NavLink to={"/admin"}>
                <i class="fa-solid fa-house"></i>
              </NavLink>
            </span>

          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleAmbulance}>
              <i class="fa-solid fa-truck-medical"></i>
            </span>
            {isOpenAmb && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/retailer/retailerOrder/histroty"}>Order History</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/retailer/retailerOrder/purchase"}>Retailer Purchase</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          {/*  */}


        </div>
    }</>


  )
}

export default RetailerSidebar
