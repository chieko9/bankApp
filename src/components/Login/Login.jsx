import './Login.css'
import { BsBank } from "react-icons/bs";
import { useNavigate } from 'react-router';

const Login =()=>{
   const Nav = useNavigate();
return(

     <>
        <div className='Loginpagecon'>
         <div className='LoginmainCon'>
            <div className='Loginwrapp'>
               <div className='CurvePaylogo'>
                    <BsBank className='Bankhouse'/>
                    <h1>CurvePay</h1>
                    </div>
                   <div className='Logotext'> <p>LOG IN TO</p>  <h3>CURVEPAY DASHBOARD</h3></div>
                 <div className='Loginemail'>
                <p>Email address</p>
               <input type="text" placeholder='Enter email' />
            </div>
            <div className='Loginpassword'>
                <p>Password</p>
                  <input type="text" placeholder='Enter password' />
                   </div>
                   
                    <div className='LOginbtn'>
                     <button onClick={()=> Nav('/Homescreen')}>LOGIN</button>
                     <div className='Donthvaccount'>
                        <div className='Donthvacces'>
                           <p>Don't have an account?</p> <span onClick={()=> Nav ('/Register')}>Sign UP</span>
                        </div>
                     </div>
                     </div>
                    
                     </div>
                      </div>
            
            </div>
        
        
     </>
)
}

export default Login