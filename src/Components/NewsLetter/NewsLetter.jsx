import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer on Your Email</h1>
        <p>Subscribe to Our NewsLetter and stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
