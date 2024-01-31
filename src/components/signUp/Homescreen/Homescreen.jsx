import "./Homescreen.css"
import React from "react"
import { PiCurrencyNgnBold } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrCreditCard } from "react-icons/gr";
import { BsBank } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdForwardToInbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useNavigation } from "react-router";


const  Homescreen =()=> {

    // const Nav = useNavigation();
    


    return(
 <>
       <div className="Homescreencon">
        <div className="Main_homecon">
            <div className="Dashboardcon">
            <div className="LeftDash">
                    <div className='leftimage'>
                        <img src="./godwin.jpg" alt="" />
                        <p>Chibuike</p>
                        <span>agbatachibuike5@gmail.com</span>
                    </div>
                    <div className='space1'>
                    </div>
                    <div className='templates'>
                        <div className='dashboard'>
                        <MdDashboard />
                        <span>Dashboard</span>
                        </div>
                        <div className='cards'>
                        <FaRegCreditCard />
                        <span>Bank Cards</span>
                        </div>
                        <div className='data'>
                        <BsFillPhoneFill />
                        <span>Data Bundle</span>
                        </div>
                        <div className='bankservices'>
                        <HiOutlineLightBulb />
                        <span>Bank Services</span>
                        </div>
                        <div className='messages'>
                        <MdForwardToInbox />
                        <span>Messages</span>
                        </div>
                        <div className='settings'>
                        <IoSettingsOutline />
                        <span>Settings</span>
                        </div>
                    </div>
                    <div className='space2'>
                    </div>
                    <div className='logoutspace'>
                        <div className='logout'>
                        <MdLogout />
                        <span>Log Out</span>
                        </div>
                    </div>

                </div>
                <div className="MidDash">
                    <div className="Profileboc">
                        <div className="profilewrapper">
                        <div className="Profilecircle"></div>
                        <p>Hi Chibuike

                        </p>
                        </div>

                        </div>
                       
                        <div className="BalanceBoard">
                            <div className="Text_Balance">
                            <div className="Availablebalance">
                            <p>Available Balance</p> <span>Transaction History</span>
                        </div>
                        <div className="MoneyBalance">
                        <PiCurrencyNgnBold />
                    
                            <h3>500,000.00</h3>
                        </div>

                            </div>

                            
                       
                    </div>
                    <div className="sendingmony">
                        <div className="sendmoneywrap">
                        <div className="ToCurvepay">
                        <RiSecurePaymentLine className="TRansferlogo"/>
                        </div>
                        <div className="ToCurvepay1">

                        <FaMoneyBillTransfer className="TRansferlogo"/>
                        </div>
                        <div className="ToCurvepay2">
                        <BsBank className="TRansferlogo" />
                        </div>
                        </div>
                       
                        
                    </div>
                    <div className="SendListname">
                        <div className="Cardsname">
                            <h5>Subscriptions</h5>
                        </div>
                        <div className="Cardsname1">
                            <h5>Transfer</h5>
                        </div>
                        <div className="Cardsname2">
                            <h5>Send To Bank</h5>
                        </div>
                    </div>

                    <div className="Mycardname">
                        <div className="Cardnaming12">
                            <h5>My Card Info</h5>
                        </div>
                    </div>

                    <div className="MyBankCard">
                       
                        <div className="Bankcard">
                                <div className="Masterwrapp">
                                    <div className="Mastercard">
                                    <div className="MasterCard2">
                                <h5>Master Card</h5>
                                </div>
                                <div className="Nairabank">
                                    <div className="nairanumber">
                                    <h5>Naira</h5>
                                    <FcSimCardChip className="Scancard" />
                                    <p>1234 * * 7480</p>
                                    </div>
                                    
                                </div>

                                <div className="Dateexpire">
                                    <h6>VALID THRU</h6>
                                    <h5>09/27</h5>
                                    
                                </div>
                                 
                                    </div>
                                

                                </div>
                                
                                
                            
                        </div>
                    </div>
                </div>
               
                <div className="RightDash">
                    <img src="" alt="" />
                    
                    <div className="bacgroundImage">
                    <img src="src/assets/downloa9d.jpeg" alt="" />
                    </div>
        
                </div>
            </div>
        </div>
       </div>
        
      
      
</>

    )
}
export default Homescreen