function Profile({currentUser}){
    return(<div>
        Profile!<br></br>
        Name: {currentUser.name} <br></br>
        Username: {currentUser.username} <br></br>
        Image Url: {currentUser.image_url}
        </div>)
}

export default Profile