import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth() {
    return (
        <>

        <form className='form'>
            <fieldset>
                <label htmlFor="sign-up">Sign Up</label>
                <br />
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='password'/>
                <br />
                <button type='submit' className='btn-main'>Submit</button>
                <br />    
                <Link 
                to='/login' 
                className='login'>
                    <p>Here to sign in!</p>
                </Link>
            </fieldset>
        </form>
            
        </>
    )
}