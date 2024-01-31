import './App.css'
import Login from './Components/Login/Login'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Homescreen from './components/signUp/Homescreen/Homescreen'
import Register from './components/signUp/Register'

function App() {

  return (
    <HashRouter>
       <Routes>
      
     <Route path='/' element = {<Login/>}/>
     < Route path='/Homescreen' element = {<Homescreen/>}/>
     < Route path='/Register' element = {<Register/>}/>

      

        
        
        
        </Routes>
      
      
      
      </HashRouter>
  
  

  )
}

export default App