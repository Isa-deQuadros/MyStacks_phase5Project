import NavBar from "./navBar"




function UserProfile({currentUserInformation}){
    return(
        <>
            <NavBar />
            <h2> {currentUserInformation.user_name}</h2>
            <img src="https://previews.123rf.com/images/onoontour/onoontour1405/onoontour140500018/29011509-dinosaur-enjoy-reading-a-book.jpg" 
                    alt="profile" 
                    height={50} 
                    width={50}
            />
            <div className="userInformation">
                <h5> First Name : {currentUserInformation.first_name}</h5>
                <h5> Last Name : {currentUserInformation.last_name} </h5>
                <h5> Username : {currentUserInformation.user_name}</h5>
                <h5> Email : {currentUserInformation.email}</h5>

            </div>
        </>
    )
}
export default UserProfile