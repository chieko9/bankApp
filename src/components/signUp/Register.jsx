import './Register.css'
// import Flag from '../assets/flag.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { FcCheckmark } from "react-icons/fc";
// import { SpinnerCircular } from 'spinners-react'


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    // const [quanVal, setQuanval] = useState(true)
    // const [process, setProcess] = useState(true)
    // const [uppCaseVal, setUppCaseVal] = useState(true)
    // const [lowCaseVal, setLowCaseVal] = useState(true)
    // const [specCharVal, setSpecCharVal] = useState(true)
    // const [numVal, setNumVal] = useState(true)
    //   console.log(showPassword);

    const navigate = useNavigate()

    const handleShowPassword = () => {
        console.log("object");
        setShowPassword(!showPassword)
    }


    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState({ isError: false, type: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState("")
    const [admin, setAdmin] = useState("")

    const handleSignUp = (e) => {
        e.preventDefault()
        setLoading(true)
        if (firstName === "") {
            setError({ isError: true, type: 'firstName', message: 'Enter name' })
            setLoading(false)
            console.log("First name");
        } else if (lastName === "") {
            setError({ isError: true, type: 'lastName', message: 'Enter name' })
            setLoading(false)
            console.log("Second name");
        } else if (!email) {
            setError({ isError: true, type: 'email', message: 'Enter email' })
            setLoading(false)
        } else if (!email.includes('@')) {
            setError({ isError: true, type: 'email@', message: 'Email must contain @' })
            setLoading(false)
        } else if (!phoneNumber) {
            setError({ isError: true, type: 'phone', message: 'Enter phone' })
            setLoading(false)
        } else if (phoneNumber.length < 3) {
            setError({ isError: true, type: 'phoneLength', message: 'Phone no must be 3 digits' })
            setLoading(false)
        }
        else if (!password) {
            setError({ isError: true, type: 'password', message: 'Enter password' })
        } else if (confirmPassword !== password) {
            setError({ isError: true, type: "passwordMatch", message: "your password must match" })
        }
        else if (!confirmPassword) {
            setError({ isError: true, type: 'confirmPassword', message: 'Enter password again' })
        } else if (setError({ isError: false, type: '', message: '' })) {
            alert('Account Created Successfully!!')
            setLoading(false)
            navigate("/")

        } else {
            const UserData = {
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                balance: 500000,
                accountNumber: phoneNumber,
                // transfferAccount
                
            }

            const oldData = JSON.parse(localStorage.getItem("allUsers")) || [];
            const newData = [...oldData, UserData]
            localStorage.setItem("allUsers", JSON.stringify(newData))
            console.log("newdata", newData.length)
            // const userId = newData.length + 1
            // setToken(userId)
            // console.log("token", token)
            setError({ isError: false, type: "", mssg: alert("account created") })
            setLoading(false)
            navigate("/")


        }

    }



    return (
        <>      <div className="MainBody">
            <div className="SignUpContentDownWrap">
                <div className="SignUpContentDownInitials">
                    <h1>Hello There</h1>
                    <p>Create an account to get started</p>
                </div>
                <div className="SignUpContentDownForm">
                    <div className="SignUpContentDownFormNames">
                        <div className="SignUpContentDownFormFName">
                            <div className="SignUpContentDownFormFNameLabels">
                                <label htmlFor="">First Name</label>
                                {
                                    error.isError && error.type === 'firstName' ? <p className='errorText'>input name</p> : null
                                }
                            </div>
                            <div className="SignUpContentDownFormFNameInputs">
                                <input
                                    type="text"
                                    placeholder="Input First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="SignUpContentDownFormLName">
                            <div className="SignUpContentDownFormLNameLabels">
                                <label htmlFor="">Last Name</label>
                                {
                                    error.isError && error.type === 'lastName' ? <p className='errorText'>{error.message}</p> : null
                                }

                            </div>
                            <div className="SignUpContentDownFormLNameInputs">
                                <input
                                    type="text"
                                    placeholder="Input Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="SignUpContentDownFormMail">
                        <div className="SignUpContentDownFormMailLabels">
                            <label htmlFor="">Email Address</label>
                            {
                                error.isError && error.type === 'email' ? <p className='errorText'>{error.message}</p> : null
                            }
                            {
                                error.isError && error.type === 'email@' ? <p className='errorText'>{error.message}</p> : null
                            }

                        </div>
                        <div className="SignUpContentDownFormMailInputs">
                            <input
                                type="email"
                                placeholder="Input Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="SignUpContentDownFormPhone">
                        <div className="SignUpContentDownFormPhoneLabels">
                            <label htmlFor="">Phone Number</label>
                            {
                                error.isError && error.type === 'phone' ? <p className='errorText'>{error.message}</p> : null
                            }
                            {
                                error.isError && error.type === 'phoneLength' ? <p className='errorText'>{error.message}</p> : null
                            }
                        </div>
                        <div
                            className="SignUpContentDownFormPhoneInputs"

                        >
                            <div className="SignUpContentDownFormPhoneFlag">
                                {/* <img src={Flag} alt="" /> <span>+234</span> */}
                            </div>

                            <input
                                type="tel"
                                maxLength={11}
                                placeholder="Input Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="SignUpContentDownFormPwd">
                        <div className="SignUpContentDownFormPwdLabels">
                            <label htmlFor="">Password</label>
                            {
                                error.isError && error.type === 'password' ? <p className='errorText'>{error.message}</p> : null
                            }

                        </div>
                        <div
                            className="SignUpContentDownFormPwdInputs"

                        >
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Input Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="SignUpContentDownFormPwdEyes"
                            >

                                {
                                    showPassword ? (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye' />) : (<AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="SignUpContentDownFormCPwd">
                        <div className="SignUpContentDownFormCPwdlabels">
                            <label htmlFor="">Confirm Password</label>
                            {
                                error.isError && error.type === 'confirmPassword' ? <p className='errorText'>{error.message}</p> : null
                            }
                            {
                                error.isError && error.type === 'passwordMatch' ? <p className='errorText'>{error.message}</p> : null
                            }
                        </div>
                        <div
                            className="SignUpContentDownFormcPwdInputs">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirm Your Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div
                                className="SignUpContentDownFormPwdEyes"
                            >

                                {
                                    showPassword ? (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye' />) : (<AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword} />)
                                }
                            </div>
                        </div>
                        {/* <div className='mmmm'>
                          

                                <p>User</p>
                                <input type="checkbox" onChange={() => setUser(!user)} />
                           

                            <p>Admin</p>
                            <input type="checkbox" onChange={() => setAdmin(!admin)} />

                        </div> */}
                    </div>
                </div>
                <div className="SignUpContentDownBtn">
                    <button onClick={handleSignUp}>SIGN UP</button>

                </div>
            </div>
         

        </div>
        </>
    )
}

export default Register