import { Routes, Route, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState} from 'react'

import LandingPage from './components/LandingPage'
import LogIn from './components/Log_in'
import SignUp from './components/Sign_up'
import Home from './components/HomePage'
import UserProfile from './components/userProfile'
import AddNewBookForm from './components/add_new_book_form'
import LibraryDisplay from './components/Library_container'

const Container = styled.div`
`


function App() {

const [currentUser, setCurrentUser] = useState(null)
const [currentUserBooks, setCurrentUserBooks] = useState([])

  const navigate=useNavigate()

  useEffect(()=>{
    fetch('/userLoggedIn')
    .then(r=>r.json())
    .then(data => {setCurrentUser(data)
    })
  },[])

    const [userLogInData, setUserLogInData]= useState({
      user_name:'',
      password:''
    })
    const handleLogInChange=(synthEvent)=>{
      setUserLogInData({...userLogInData, [synthEvent.target.name]: synthEvent.target.value})
    }

    const handleLoginSubmit = (synthEvent) => {
      synthEvent.preventDefault()

      fetch(`/login`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(userLogInData)
      })
      .then(r => r.json())
      .then( user => { 
        if (user.error) {
          alert(user.error)
        } else {
            setCurrentUser(user)
            setCurrentUserBooks(user.books)
            navigate('/home')
        }

      })
        }


    const [userSignUpData, setUserSignUpData]= useState({
      first_name:'',
      last_name:'',
      user_name:'',
      email:'',
      password:''
    })
    const handleSignUpChange= (synthEvent) => {
      setUserSignUpData({...userSignUpData, [synthEvent.target.name]: synthEvent.target.value})
    }
    const handleSignUpSubmit = (synthEvent) =>{
      synthEvent.preventDefault()

      fetch('/users',{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(userSignUpData)
      })
      .then(r=> r.json())
      .then( user => { setCurrentUser(user)
        console.log(user)
        setCurrentUserBooks(user.books)
            // if(currentUser){navigate('/home')
          }
      )
    }

    const handleLogOut = () =>{
      fetch(`/logout`, {method:"DELETE"})
      .then(r =>r.json())
      .then( () => {
        navigate("/")
        setCurrentUser(null)
        
      })
    }



  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
        
        <Route path="/log_in" element={
                    <LogIn  functionToHandleLogInChange={handleLogInChange} 
                            functiontoHandleLogInSubmit={handleLoginSubmit}
                    />}>
        </Route>
        
        <Route path="/sign_up" element={
                  <SignUp functionToHandleSignUpOnChange={handleSignUpChange}
                          functionToHandleSignUpSubmit={handleSignUpSubmit}
                  />}>
        </Route>
        
        <Route path="/home" element={<Home 
                                            functionForLogOut={handleLogOut}
                                            currentUser={currentUser}
                                            currentUserBooks={currentUserBooks} 
                                            />}>
        </Route>
        
        <Route path="/user_profile" element={<UserProfile currentUserInformation={currentUser}/>}> </Route>
        
        <Route path="/add_a_new_book" element={<AddNewBookForm currentUserBooks={currentUserBooks} 
                                                              setCurrentUserBooks={setCurrentUserBooks}/>}>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
