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

/* THIS IS ANYTHING USER Session RELATED */
const [currentUser, setCurrentUser] = useState(null)

const navigate=useNavigate()
useEffect(()=>{
  fetch('/userLoggedIn')
  .then(r=>r.json())
  .then(data => {
                // console.log("This is the data", data)
                setCurrentUser(data)
                // console.log(data.books)
                
  })
},[]
)
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
      .then(r => {
        if(r.ok){
          r.json().then(user => { setCurrentUser(user)
                                  console.log(user)
                                  navigate('/home')
                                  
          })
        }
      }) 
      .then((theUser) => {
          console.log(theUser)
          setCurrentUser(theUser)
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
      .then(r => {
        if(r.ok){
          r.json().then(user => {setCurrentUser(user)
                                  console.log(user)
                                  navigate('/home')
          })
        }

      }) 
    }

    const handleLogOut = () =>{
      fetch(`/logout`, {method:"DELETE"})
      .then(r =>r.json())
      .then( deleteUserSession => {
        setCurrentUser(null)
        navigate.push("/")
      })
    }
  

/* THIS IS ANYTHING BOOKS RELATED */
  const [currentUserBooks, setCurrentUserBooks]= useState([])

  useEffect(()=>{
    fetch(`/thisUsersBooks`)
    .then(r => r.json())
    .then( data => { setCurrentUserBooks(data)
                    console.log("The Current UserBooks", data)}
        )}, [])

        console.log("The current users books", currentUserBooks)
  /* THIS IS ANYTHING AUTHOR RELATED */

  /* THIS IS ANYTHING GENRE RELATED */

  /* THIS IS ANYTHING TROPE RELATED */

  /* THIS IS ANYTHING LOCATION RELATED */





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
        <Route path="/library" element={<LibraryDisplay
                                                        
                                        />
                                        }>
        </Route>
        
        <Route path="/user_profile" element={<UserProfile currentUserInformation={currentUser}/>}> </Route>
        
        <Route path="/add_a_new_book" element={<AddNewBookForm 
                                                              UserBookArray={currentUserBooks} 
                                                              SetUserBookArrayFunction={setCurrentUserBooks}
                                                />}>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
