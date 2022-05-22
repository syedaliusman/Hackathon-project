import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" width="350px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-1 fw-bolder mb-0">Happy to see you!</h5>
                        <p className="card-text lead fs-2">We look forward to serving you.</p>                        
                    </div>

                </div>
            </div>
            <Products/>
        </div>
    )
}
