import React from 'react'

const login = () => {
  return (
    <main>
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>     
                </div>
                <button className="button primary-button" >Login</button>
            
            </form>
        </div>
    </main>
  )
}

export default login
