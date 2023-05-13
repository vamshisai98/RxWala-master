import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../constants/GetDimention'

import './sidebar.css'

const ManagerSidebar = () => {
  const [drawer, setDrawer] = useState(false)
  const [isOpenAmb, setIsOpenAmb] = useState(false);
  const [isOpenVendor, setIsOpenVendor] = useState(false);
  const [isOpenStore, setIsOpenStore] = useState(false);
  const [isOpenTransaction, setIsOpenTrasaction] = useState(false);
  const [isOpenStock, setIsOpenStock] = useState(false);
  const [isOpenRole, setIsOpenRole] = useState(false);
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [isOpenLoyalty, setIsOpenLoyalty] = useState(false);
  const [isOpenNurse, setIsOpenNurse] = useState(false);
  const [isOpenDiagnostic, setIsOpenDiagnostic] = useState(false);
  const [isOpenPurchase, setIsOpenPurchase] = useState(false)





  const [isOpenAmb2, setIsOpenAmb2] = useState(false)

  const { height, width } = useWindowDimensions();
  const dimension = width <= 679
  useEffect(() => {
    (dimension ? setDrawer(true) : setDrawer(false))

  }, [dimension])

  // ----------------------store state in localstorage----------------------------------
  // localStorage.setItem("isOpen", JSON.stringify(false))

  // const isOpen = JSON.parse(localStorage.getItem("isOpen"))
  // console.log("helo", isOpen)



  const toggleAmbulance = async () => {
    setIsOpenAmb(!isOpenAmb);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)

  };
  // -------------------------------------------------------------submenu=-------------------------------

  const toggleAmbulance2 = async () => {
    setIsOpenAmb2(!isOpenAmb2);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)

  };

  const toggleVendor = () => {
    setIsOpenVendor(!isOpenVendor);
    setIsOpenAmb(false);
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  };

  const toggleStore = () => {
    setIsOpenStore(!isOpenStore);
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  };
  const toggleTransaction = () => {

    setIsOpenTrasaction(!isOpenTransaction)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  const toggleStock = () => {
    setIsOpenStock(!isOpenStock)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  const toggleRole = () => {
    setIsOpenRole(!isOpenRole)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }
  const toggleCustomer = () => {
    setIsOpenCustomer(!isOpenCustomer)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  const toggleLoyalty = () => {
    setIsOpenLoyalty(!isOpenLoyalty)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)

  }
  const toggleNurse = () => {
    setIsOpenNurse(!isOpenNurse)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenDiagnostic(false)
  }

  const toggleDiagnostic = () => {
    setIsOpenDiagnostic(!isOpenDiagnostic)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenNurse(false)
  }

  const handleClickDashboard = ()=>{
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  // -------------------------------------------------sub-menu---menu-----------------------------
  const togglePurchase = () => {
    setIsOpenPurchase(!isOpenPurchase)
  }
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

          {/* <div className="collapsible-menu dashboard-menu">
            <span className='side-navb'>
              <NavLink to={"/storemanager"}>DASHBOARD

              </NavLink>
            </span>

          </div> */}
          {/* ---------------------------------------------------------------------------------------------------------- */}
          <nav className='nav-open'>
            <ul className='nav-open-menu'>
              <li className='sum-menu'>
                <div class="accordion" id="accordionExample">

                  {/* ------------------------------Dashboard------------------------------------------------------ */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button">
                        <NavLink to={"/storemanager"}>DASHBOARD </NavLink>

                      </button>
                    </h2>

                  </div>


                  {/* ---------------------------Ambulance-------------------------------------------------------- */}

                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Ambulance Management
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/add-ambulane"}>Add Ambulance</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/verify-ambulane"}>Verify Ambulance</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/update-ambulane"}>Update Ambulance</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/report-ambulane"}>Ambulance Report</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}

                  {/* ----------------------------------------Vendor ------------------------------------------ */}




                  {/* -----------------------------------------Store-------------------------------------------- */}


                  {/* -------------------------------------------------------Nurse------------------------------------------- */}
                  {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Nurse Management
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/nursing/location"}>Location</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/nursing/profile"}>Profile</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/nursing/membership"}>Membership</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/nursing/service"}>My Service</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/nursing/update/price"}>Update Price</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/nursing/update/package"}>Update Package</NavLink>
                            </li>

                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}

                  {/* ------------------------------------------------------------Diagnostice------------------------------------------- */}

                  {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="true" aria-controls="collapseFifth">
                        Diagnostic Management
                      </button>
                    </h2>
                    <div id="collapseFifth" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/location"}>Location</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/profile"}>Profile</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/membership"}>Membership</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/service"}>My Service</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/update/price"}>Update Price</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/update/package"}>Update Package</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}

                  {/* ------------------------------------------------------------------------------------------------------- */}



                  {/* ------------------------------------------------------------Transaction------------------------------- */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTransaction" aria-expanded="true" aria-controls="collapseTransaction">
                        Transaction Management
                      </button>
                    </h2>
                    <div id="collapseTransaction" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <div class="accordion" id="accordionExample">
                                <div className="collapsible-menu">
                                  <span className='side-navb' onClick={togglePurchase}>Purchase Management
                                    {!isOpenPurchase && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
                                    {isOpenPurchase && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
                                  </span>
                                  {isOpenPurchase && (
                                    <nav className='nav-open'>
                                      <ul>
                                        <li className='sum-menu' >
                                          <NavLink to={"/storemanager/transaction/purchase/invoice"}>Purchase Invoice</NavLink>
                                        </li>
                                        <li className='sum-menu'>
                                          <NavLink to={"/storemanager/transaction/purchase/upload"}>Upload Purchase</NavLink>
                                        </li>
                                        <li className='sum-menu'>
                                          <NavLink to={"/storemanager/transaction/purchase/report"}>Purchase Report</NavLink>
                                        </li>

                                      </ul>
                                    </nav>
                                  )}
                                </div>
                                <div className="collapsible-menu">
                                  <span className='side-navb' onClick={toggleStock}>Sales Management
                                    {!isOpenStock && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
                                    {isOpenStock && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
                                  </span>
                                  {isOpenStock && (
                                    <nav className='nav-open'>
                                      <ul>


                                        <li className='sum-menu'>
                                          <NavLink to={"/storemanager/transaction/sales/invoice"}>Sales Invoice</NavLink>
                                        </li>
                                        <li className='sum-menu'>
                                          <NavLink to={"/storemanager/transaction/sales/upload"}>Upload Sales</NavLink>
                                        </li>
                                        <li className='sum-menu'>
                                          <NavLink to={"/storemanager/transaction/sales/report"}>Purchase Sales</NavLink>
                                        </li>

                                      </ul>
                                    </nav>
                                  )}
                                </div>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* ----------------------------------------------------------- Stock-------------------------------- */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixth" aria-expanded="true" aria-controls="collapseSixth">
                        Stock Management
                      </button>
                    </h2>
                    <div id="collapseSixth" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/upload-stock"}>Upload Stock</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/report-stock"}>Report Stock</NavLink>
                            </li>

                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* --------------------------------------------------------- Role------------------------------------ */}

                  {/* ------------------------------------------------------Customer--------------------------------- */}


                  {/* ------------------------------------------------------Loyalty------------------------------ */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                        Loyalty Management
                      </button>
                    </h2>
                    <div id="collapseNine" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/storemanager/loyaltypoint"}>Loyalty Point Calculation</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </nav>
          {/* ---------------------------------------------------------------------------------------------------------- */}



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
            <span className='side-navb' onClick={handleClickDashboard}>
              <NavLink to={"/storemanager"}>
                <i class="fa-solid fa-house"></i>
              </NavLink>
            </span>

          </div>
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleAmbulance}>
              <i class="fa-solid fa-truck-medical"></i>
            </span>
            {isOpenAmb && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/add-ambulane"}>Add Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/verify-ambulane"}>Verify Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update-ambulane"}>Update Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/report-ambulane"}>Ambulance Report</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}


          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleVendor}>
              <i class="fa-solid fa-list"></i>
            </span>
            {isOpenVendor && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu' onClick={toggleVendor}>
                    <NavLink to={"/storemanager/add-ambulane"}>Add Vendor</NavLink>
                  </li>

                  <li className='sum-menu' onClick={toggleVendor}>
                    <NavLink to={"/storemanager/update-ambulane"}>Update Vendor</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}


          {/*  */}


          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStore}>
              <i class="fa-solid fa-store"></i>
            </span>
            {isOpenStore && (
              <nav className='nav-closed'>
                <ul >
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/create-store"}>Create Store</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update-store"}>Update Store</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/add-store-manager"}>Add Store Manager</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}

          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleTransaction}>
              <i class="fa-solid fa-exchange-alt"></i>
            </span>
            {isOpenTransaction && (
              <nav className='nav-closed'>
                <ul onClick={()=>{
                toggleTransaction()
                    setDrawer(!drawer)
                }}>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/transaction/purchase/upload"}>Purchase Management</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/transaction/sales/upload"}>Sales Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStock}>
              <i class="fa-solid fa-warehouse"></i>
            </span>
            {isOpenStock && (
              <nav className='nav-closed'>
                <ul onClick={toggleStock}>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/upload-stock"}>Upload Stock</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/report-stock"}>Report Stock</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleRole}>
              <i class="fa-solid fa-user-tag"></i>
            </span>
            {isOpenRole && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/add-role"}>Add Role</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update-role"}>Update Role</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleCustomer}>
              <i class="fa-solid fa-users"></i>
            </span>
            {isOpenCustomer && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/add-ambulane"}>Customer Enquiry</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update-ambulane"}>Item Master Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleLoyalty}>
              <i class="fa-solid fa-fingerprint"></i>
            </span>
            {isOpenLoyalty && (
              <nav className='nav-closed'>
                <ul  onClick={toggleLoyalty}>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/loyaltypoint"}>Loyalty Point Calculation</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>



        </div>
    }</>


  )
}

export default ManagerSidebar
