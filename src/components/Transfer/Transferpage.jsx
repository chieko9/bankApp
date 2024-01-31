import { useNavigate } from "react-router-dom";
import "./Transfer.css"
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const Transferpage = () => {
  

    const [amount, setamount]= useState()
    const [accountNumber, setAccountNumber]= useState()

    const allAvailableUsers = JSON.parse(localStorage.getItem("allUsers"))
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    console.log(loggedInUser)


    const handletransfer= ()=>{
        const update = allAvailableUsers. map((e)=>{
            if(e.accountNumber === loggedInUser.accountNumber){
               let newamount = e.balance - parseInt(amount);
               e.balance = newamount;
               return e
            }
            if (e.accountNumber === accountNumber){
                let newamount = e.balance + parseInt(amount)
                e.balance =  newamount;
                return e
            }
            return e
        }
        )
        let newamount =loggedInUser.balance - parseInt(amount)
        loggedInUser.balance=newamount

        localStorage.setItem("allAccountUsers", JSON.stringify(update))
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))

    }

    const Nav = useNavigate()

    const back = () => {
        Nav("/wallet")
    }
    return (
        <div className="Transferpop">
            <div className="transwrap">
                <div className="transup">
                    <div className="transicon">
                        <IoIosArrowBack style={{ fontSize: "20px" }} />
                        <h3 onClick={back}>Back</h3>
                    </div>
                </div>
                <div className="trantitle">
                    <h1>Create Payment</h1>
                </div>
                <div className="Accnum">
                    <h2>Account Number</h2>
                    <input  onChange={(e)=> setAccountNumber(e.target.value)} type="text" placeholder="Enter Account Number" />
                </div>
                <div className="Accnum">
                    <h2>Amount</h2>
                    <input onChange={(e)=>setamount(e.target.value)} type="text" placeholder="Enter Amount" />
                </div>
             <div className="sendbtn">
             <button onClick={()=>handletransfer()} className="send">Send</button>
             </div>
            </div>
        </div>
    )

}
export default Transferpage