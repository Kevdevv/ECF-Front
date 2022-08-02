import React from 'react';
import 'Pages/Landing/Landing.css';

const Landing = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}>
            <div className='title'>
            <h1>Charles Cantin - Photographie</h1>
            </div>            
          </div>
    )
}

export default Landing