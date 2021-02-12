import React from 'react'
const Home = () => {

    const logout_session = e =>{
        const data = localStorage.removeItem('Token_Key')
        if(!data)
        {
            alert("Logout Successfully")
            window.location.href="/"
        }
    }

    return ( 
        <div>
            <div style={{margin:'250px 0 0 0',fontSize:'120px'}}>Welcome to Student</div>
            <button className="btn btn-outline-primary btn-lg" style={{width:'250px'}} onClick={() => { if (window.confirm('Are you sure you wish to Logout?')) logout_session()}}>Logout</button>
        </div>
     );
}
 
export default Home;