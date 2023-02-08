import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { auth } from './firebase';
import Todo from "./TodoList/Todo"

function App() {
  const [username,setUserName] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserName(user.email.substr(0,user.email.indexOf("@")))
      }
      else {
        setUserName("")
      }
    })
  },[])
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Todo" element={<Todo name={username}/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Signup' element = {<Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;